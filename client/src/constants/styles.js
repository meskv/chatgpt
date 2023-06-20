export const lightThemeClasses = "text-gray-800";
export const darkThemeClasses = "text-gray-100";

export const lightBorderClasses = "border-b border-black/10";
export const darkBorderClasses = "border-b dark:border-gray-900/50";

export const lightBackgroundClasses = "bg-none";
export const darkBackgroundClasses = "dark:bg-gray-800";

export const lightButtonClasses = "text-black";
export const darkButtonClasses = "dark:text-white";

export const lightHoverClasses = "hover:bg-gray-100 hover:text-gray-700";
export const darkHoverClasses = "dark:hover:bg-gray-700 dark:hover:text-gray-200";

export const lightDisabledHoverClasses = "disabled:dark:hover:text-gray-400";
export const darkDisabledHoverClasses = "disabled:dark:hover:text-gray-400";

export const lightTextClasses = "text-gray-400";
export const darkTextClasses = "dark:text-gray-400";

export const lightContainerClasses = `${lightThemeClasses} ${lightBorderClasses} ${lightBackgroundClasses}`;
export const darkContainerClasses = `${darkThemeClasses} ${darkBorderClasses} ${darkBackgroundClasses}`;

export const lightImageClasses = "w-8 h-8 rounded-full";
export const darkImageClasses = "w-8 h-8 rounded-full";

export const lightLikeButtonClasses = `${lightButtonClasses} ${lightDisabledHoverClasses}`;
export const darkLikeButtonClasses = `${darkButtonClasses} ${darkDisabledHoverClasses}`;

export const lightDislikeButtonClasses = `${lightHoverClasses} ${lightTextClasses}`;
export const darkDislikeButtonClasses = `${darkHoverClasses} ${darkTextClasses}`;

