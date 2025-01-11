import React from "react";
import { useTheme } from "@/components/theme-provider.tsx";

interface IconLinkProps {
    iconSet: { light: string; dark: string };
    link: string;
    altText: string;
    size?: number;
}

const IconLink: React.FC<IconLinkProps> = ({ iconSet, link, altText, size = 32 }) => {
    const { theme, systemTheme } = useTheme();
    const currentTheme = theme === "system" ? systemTheme : theme;
    const icon = currentTheme === "light" ? iconSet.light : iconSet.dark;

    return (
        <a className="cursor-pointer" href={link} target="_blank" rel="noopener noreferrer">
            <img src={icon} alt={altText} style={{ width: size, height: size }} />
        </a>
    );
};

export default IconLink;
