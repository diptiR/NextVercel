import React from "react";
//import { App, IconMail, IconPhone } from "@ftdr/blueprint-components-react";
//import FdtrAccordion from '../../components/accordion/accordion'

export default function Example() {
    const navMenuItems = React.useMemo(
        () => [
          {
            id: "1",
            label: "Home",
            onClick: () => {},
          },
          {
            id: "2",
            label: "About",
            onClick: () => {},
          },
          {
            id: "3",
            label: "Contact Us",
            onClick: () => {},
            subMenuItems: [
              {
                id: "3.1",
                label: "Mail",
                onClick: () => {},
              },
              {
                id: "3.2",
                label: "Phone",
                onClick: () => {},
              },
              {
                id: "3.3",
                label: "WhatsApp",
                onClick: () => {},
              },
            ],
          },
        ],
        []
      );
    
      const logoProps = React.useMemo(
        () => ({
          brand: "ahs",
        }),
        []
      );

      const ctaButtons = React.useMemo(
        () => [
          { label: "Schedule Repair", variant: "outlined", color: "accent" },
          { label: "Join Today", variant: "filled", color: "accent" },
        ],
        []
      );

      const utilityHeaderLinks = React.useMemo(
        () => [
          {
            children: "About",
          },
          {
            children: "Real Estate Professionals",
          },
          {
            children: "Contractors",
          },
        ],
        []
      );

      const utilityHeaderIconLinks = React.useMemo(
        () => [
          {
            children: "care@ahs.com",
            startIcon: <IconMail />,
          },
          {
            children: "888.682.1043",
            startIcon: <IconPhone />,
          },
        ],
        []
      );
  
      const signInLinkOptions = React.useMemo(
        () =>
          ({
            label: "Sign In",
            onClick: () => {},
            placement: "main-header",
            prioritizeOnMobile: true,
          }),
        []
      );
    
      const signOutLinkOptions = React.useMemo(() => ({ label: "Sign Out", onClick: () => {} }), []);
  return (
    <div>Hello App</div>
  );
}