import clsx from "clsx";
import { forwardRef } from "react";

const sizes = {
  md: "lg:w-[635px] w-[450px] h-[400px]",
  lg: "lg:w-[1300px] w-[450px] h-[400px]",
};

const variants = {
  primary: `bg-gradient-to-br from-[#2d1f4e] to-[#581a4f]`,
  secondary: `bg-gradient-to-r from-[#0F1E32] to-[#122A2C]`,
  terciary: `bg-gradient-to-br from-[#1D3844] to-[#301A2D]`,
};

export type FeaturePreviewVariants = keyof typeof variants;
export type FeaturePreviewSize = keyof typeof sizes;

export interface FeaturePreviewBaseProps {
  variant?: FeaturePreviewVariants;
  size?: FeaturePreviewSize;
  className?: string;
  title: string;
  description: string;
  loading?: boolean;
  icon?: React.ReactNode;
  link?: React.ReactNode;
  customContent?: React.ReactNode;
}

export const FeaturePreview = forwardRef<
  HTMLDivElement & FeaturePreviewBaseProps,
  FeaturePreviewBaseProps
>(
  (
    {
      loading,
      title,
      description,
      size,
      variant,
      link,
      customContent,
      className,
      ...props
    },
    ref
  ) => {
    // if size is large then display right side content.
    let allow_content = size === "lg" ? true : false;

    className = clsx(
      variants[variant || "primary"],
      sizes[size || "md"],
      "transition-all",
      "rounded-xl"
    );

    const FeaturePreviewLink = ({ link }: FeaturePreviewBaseProps) => {
      return link as JSX.Element;
    };

    return (
      <div className={clsx(className, "no-underline")}>
        <div
          className={`w-full my-10 ${
            allow_content === true ? "flex justify-between" : ""
          }`}
        >
          <div className="ml-10">
            <>
              <p className="text-2xl font-bold text-white">{title}</p>
              <p className="max-w-sm mt-2 text-lg text-gray-500">
                {description}
              </p>
              <div className="mt-6">{link}</div>
            </>
          </div>
          <div className="hidden mr-10 lg:block">
            {allow_content === true ? <div>{customContent}</div> : null}
          </div>
        </div>
      </div>
    );
  }
);
