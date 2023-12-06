import { cn } from "@/lib/utils";

interface ButtonProps {
  label: string;
  secondary?: boolean;
}

const Button = (props: ButtonProps) => {
  return (
    <button
      className={cn(
        "bg-primary-500 transition-transform text-white rounded-md px-4 py-2 hover:bg-slate-800",
        [props.secondary && "bg-slate-400"]
      )}
    >
      {props.label}
    </button>
  );
};

export default Button;
