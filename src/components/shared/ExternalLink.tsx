import { Link } from "@chakra-ui/react";

export const ExternalLink: React.FC<{
  children: React.ReactNode;
  href: string;
}> = ({ children, href }) => (
  <Link href={href} target="_blank" rel="noopener noreferrer">
    {children}
  </Link>
);
