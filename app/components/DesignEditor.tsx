"use client";

import { useEffect, useReducer, useRef, useCallback, JSX } from "react";
import { Rnd } from "react-rnd";
import html2canvas from "html2canvas";
import { 
  FaPlus, FaUndo, FaRedo, FaSave, 
  FaCloudDownloadAlt, FaTrashAlt, FaImage 
} from "react-icons/fa";

// Define shape type
type Shape = {
  type: "rectangle" | "circle";
  x: number;
  y: number;
  width: number;
  height: number;
};

// Define state type
type State = {
  shapes: Shape[];
  history: Shape[][]; // For undo/redo history
  future: Shape[][];  // For redo history
};

// Define action type
type Action =
  | { type: "ADD_SHAPE"; payload: Shape }
  | { type: "UPDATE_SHAPE"; index: number; payload: Partial<Shape> }
  | { type: "REMOVE_ALL" }
  | { type: "UNDO" }
  | { type: "REDO" }
  | { type: "SAVE" }
  | { type: "LOAD" };

const initialState: State = {
  shapes: [],
  history: [],
  future: [],
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "ADD_SHAPE":
      return {
        ...state,
        shapes: [...state.shapes, action.payload],
        history: [...state.history, state.shapes],
      };
    case "UPDATE_SHAPE":
      return {
        ...state,
        shapes: state.shapes.map((shape, index) =>
          index === action.index ? { ...shape, ...action.payload } : shape
        ),
      };
    case "REMOVE_ALL":
      return { ...state, shapes: [] };
    case "UNDO":
      if (state.history.length === 0) return state;
      const previous = state.history[state.history.length - 1];
      return {
        shapes: previous,
        history: state.history.slice(0, -1),
        future: [state.shapes, ...state.future],
      };
    case "REDO":
      if (state.future.length === 0) return state;
      const next = state.future[0];
      return {
        shapes: next,
        history: [...state.history, state.shapes],
        future: state.future.slice(1),
      };
    case "SAVE":
      localStorage.setItem("design", JSON.stringify(state.shapes));
      return state;
    case "LOAD":
      const savedShapes = JSON.parse(localStorage.getItem("design") || "[]") as Shape[];
      return { ...state, shapes: savedShapes };
    default:
      return state;
  }
}

// Reusable Button component
interface ButtonProps {
  onClick: () => void;
  label: string;
  icon: JSX.Element;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, label, icon, className }) => (
  <button
    onClick={onClick}
    className={`flex items-center px-4 py-2 rounded ${className}`}
  >
    {icon}
    <span className="ml-2">{label}</span>
  </button>
);

export default function DesignEditor() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const canvasRef = useRef<HTMLDivElement>(null);

  const addShape = useCallback((type: "rectangle" | "circle") => {
    dispatch({
      type: "ADD_SHAPE",
      payload: { type, x: 50, y: 50, width: 100, height: 100 },
    });
  }, []);

  const exportAsPNG = async () => {
    if (canvasRef.current) {
      const canvas = await html2canvas(canvasRef.current);
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = "canvas.png";
      link.click();
    }
  };

  useEffect(() => {
    dispatch({ type: "LOAD" });
  }, []);

  const onResizeStop = (index: number, shape: Shape) => (
    e: React.SyntheticEvent, 
    direction: any, 
    ref: HTMLElement, 
    delta: any, 
    position: any
  ) => {
    dispatch({
      type: "UPDATE_SHAPE",
      index,
      payload: {
        width: ref.offsetWidth,
        height: shape.type === "circle" ? ref.offsetWidth : ref.offsetHeight,
        x: position.x,
        y: position.y,
      },
    });
  };

  return (
    <div className="relative w-full h-screen bg-gray-900 text-white flex">
      {/* Button Container - Left Side */}
      <div className="w-1/5 p-4 flex flex-col gap-2">
        <Button onClick={() => addShape("rectangle")} label="Rectangle" icon={<FaPlus />} className="bg-blue-500" />
        <Button onClick={() => addShape("circle")} label="Circle" icon={<FaPlus />} className="bg-green-500" />
        <Button onClick={() => dispatch({ type: "UNDO" })} label="Undo" icon={<FaUndo />} className="bg-yellow-500" />
        <Button onClick={() => dispatch({ type: "REDO" })} label="Redo" icon={<FaRedo />} className="bg-purple-500" />
        <Button onClick={() => dispatch({ type: "SAVE" })} label="Save" icon={<FaSave />} className="bg-teal-500" />
        <Button onClick={() => dispatch({ type: "LOAD" })} label="Load" icon={<FaCloudDownloadAlt />} className="bg-red-700" />
        <Button onClick={exportAsPNG} label="Export" icon={<FaImage />} className="bg-orange-500" />
        <Button onClick={() => dispatch({ type: "REMOVE_ALL" })} label="Remove" icon={<FaTrashAlt />} className="bg-gray-500" />
      </div>
      {/* Canvas Container */}
      <div ref={canvasRef} className="flex-grow bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        {state.shapes.map((shape, index) => (
          <Rnd
            key={index}
            size={{ width: shape.width, height: shape.height }}
            position={{ x: shape.x, y: shape.y }}
            onDragStop={(e, d) => dispatch({ type: "UPDATE_SHAPE", index, payload: { x: d.x, y: d.y } })}
            onResize={onResizeStop(index, shape)}
            className={`absolute bg-white opacity-75 border border-gray-500 ${shape.type === "circle" ? "rounded-full" : ""}`}
            lockAspectRatio={shape.type === "circle"}
          />
        ))}
      </div>
    </div>
  );
}
