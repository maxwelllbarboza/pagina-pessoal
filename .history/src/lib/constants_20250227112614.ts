import { Github, Linkedin, Youtube } from "lucide-react";

interface SocialLink {
    icon: JSX.Element
}

export const socialLinks = [
    {icon: <Github size={20}/>, href:"link_para_github"},
    {icon: <Linkedin size={20}/>, href: "link_para_github"},
    {icon: <Youtube size={20}/>, href: "link_para_github"},
]