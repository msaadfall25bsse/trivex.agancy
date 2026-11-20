"use client";

import React from "react";

interface TechLogoProps {
  name: string;
  className?: string;
}

export function TechLogo({ name, className = "w-5 h-5" }: TechLogoProps) {
  switch (name) {
    case "React js":
    case "React.js":
    case "React 19":
    case "React Native":
      return (
        <svg viewBox="0 0 115.3 100" className={className} fill="none">
          <ellipse cx="57.65" cy="50" rx="10.5" ry="24" transform="rotate(30 57.65 50)" stroke="#61DAFB" strokeWidth="4.5" />
          <ellipse cx="57.65" cy="50" rx="10.5" ry="24" transform="rotate(90 57.65 50)" stroke="#61DAFB" strokeWidth="4.5" />
          <ellipse cx="57.65" cy="50" rx="10.5" ry="24" transform="rotate(150 57.65 50)" stroke="#61DAFB" strokeWidth="4.5" />
          <circle cx="57.65" cy="50" r="6" fill="#61DAFB" />
        </svg>
      );

    case "Next.Js":
    case "Next.js":
    case "Next.js 15":
      return (
        <svg viewBox="0 0 180 180" className={className} fill="none">
          <circle cx="90" cy="90" r="85" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="6" />
          <path d="M125 130L72 58H58V122H70V76.5L118 141C120.4 137.8 122.8 134 125 130Z" fill="currentColor" />
          <rect x="110" y="58" width="12" height="64" fill="currentColor" />
        </svg>
      );

    case "Typescript":
    case "TypeScript":
      return (
        <svg viewBox="0 0 128 128" className={className}>
          <rect width="128" height="128" rx="20" fill="#3178C6" />
          <path d="M72.9 83.4c2.4 3.7 6.2 5.8 11.2 5.8 4.2 0 7.3-1.8 7.3-4.8 0-3.3-3.6-4.6-9.7-7-9.5-3.8-13.8-8.5-13.8-15.6 0-9.3 7.8-16 19.3-16 6.8 0 12.3 2.1 16.2 6.5l-6.1 6.5c-2.4-2.8-5.7-4.4-10.1-4.4-4.5 0-7 2.1-7 4.9 0 3 3.1 4.2 8.7 6.5 10.7 4.3 14.8 8.8 14.8 16.3 0 10.4-8.1 16.4-20.7 16.4-9.3 0-16.1-3.1-20.4-8.8l6.3-5.3zM46.7 54.4h-17v-8.2h44.4v8.2h-17v50.2h-10.4v-50.2z" fill="#FFF" />
        </svg>
      );

    case "Javascript":
    case "JavaScript":
      return (
        <svg viewBox="0 0 128 128" className={className}>
          <rect width="128" height="128" rx="20" fill="#F7DF1E" />
          <path d="M37.9 91.8c2.1 3.5 5 5.8 9.3 5.8 4.7 0 7.7-2.3 7.7-8.1V46.2h10.9v43.7c0 11.7-6.9 17.1-17.7 17.1-8.5 0-13.7-4.3-16.5-9.7l6.3-5.5zM79.2 83.4c2.4 3.7 6.2 5.8 11.2 5.8 4.2 0 7.3-1.8 7.3-4.8 0-3.3-3.6-4.6-9.7-7-9.5-3.8-13.8-8.5-13.8-15.6 0-9.3 7.8-16 19.3-16 6.8 0 12.3 2.1 16.2 6.5l-6.1 6.5c-2.4-2.8-5.7-4.4-10.1-4.4-4.5 0-7 2.1-7 4.9 0 3 3.1 4.2 8.7 6.5 10.7 4.3 14.8 8.8 14.8 16.3 0 10.4-8.1 16.4-20.7 16.4-9.3 0-16.1-3.1-20.4-8.8l6.3-5.3z" fill="#000" />
        </svg>
      );

    case "Vue":
    case "Vue.js":
    case "Vue / Nuxt":
      return (
        <svg viewBox="0 0 128 128" className={className}>
          <path d="M78.8 18.2L64 43.8 49.2 18.2H12.6l51.4 89 51.4-89H78.8z" fill="#42B883" />
          <path d="M78.8 18.2L64 43.8 49.2 18.2H32.4l31.6 54.8 31.6-54.8H78.8z" fill="#35495E" />
        </svg>
      );

    case "CSS":
    case "CSS3":
      return (
        <svg viewBox="0 0 128 128" className={className}>
          <path d="M18.8 13.5l9.2 103.3 36 10 36-10 9.2-103.3H18.8z" fill="#1572B6" />
          <path d="M64 22.9v94.1l27.5-7.6 7.6-86.5H64z" fill="#33A9DC" />
          <path d="M64 48.9h19.5l-1.4 15.6H64v15.6h16.7l-1.6 17.8-15.1 4.1v16.1l27.1-7.5 3.7-41.7.3-3.8.3-4.2.9-10.6.3-4.2.3-3.8.3-3.5H64v16.1z" fill="#FFF" />
          <path d="M64 48.9H44.1l.3 3.8.3 4.2.9 10.6.3 4.2.3 3.8h17.8V64.5H46.1l-1.4-15.6H64V32.8H34.4l3.7 41.7 1.6 17.8 24.3 6.7v-16.1l-15.1-4.1-1-11.4H64V48.9z" fill="#EBEBEB" />
        </svg>
      );

    case "Html5":
    case "HTML5":
      return (
        <svg viewBox="0 0 128 128" className={className}>
          <path d="M18.8 13.5l9.2 103.3 36 10 36-10 9.2-103.3H18.8z" fill="#E44D26" />
          <path d="M64 22.9v94.1l27.5-7.6 7.6-86.5H64z" fill="#F16529" />
          <path d="M64 48.9h18.2l-1.7 19.5H64v16.1h15l-1.4 15.8-13.6 3.7v16.1l27.1-7.5 4.8-53.7H64v16.1z" fill="#FFF" />
          <path d="M64 32.8H34.4l4.8 53.7 24.8 6.9v-16.1l-13.6-3.7-1.4-15.8h15V48.9H46.1l-1.4-16.1H64V32.8z" fill="#EBEBEB" />
        </svg>
      );

    case "MaterialUI":
    case "MUI":
      return (
        <svg viewBox="0 0 128 128" className={className}>
          <path d="M0 32l32-18.5v37L0 69V32z" fill="#00B0FF" />
          <path d="M32 13.5L64 32v37L32 50.5v-37z" fill="#0081CB" />
          <path d="M64 32l32-18.5v37L64 69V32z" fill="#00B0FF" />
          <path d="M32 50.5L64 69v37L32 87.5v-37z" fill="#0081CB" />
          <path d="M64 69l32-18.5v37L64 106V69z" fill="#00B0FF" />
          <path d="M96 50.5l32-18.5v37L96 87.5v-37z" fill="#0081CB" />
        </svg>
      );

    case "Rest API":
    case "REST API":
    case "GraphQL":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="3" stroke="#00D2FF" />
          <path d="M3 12h3m12 0h3M12 3v3m0 12v3M5.6 5.6l2.2 2.2m8.4 8.4l2.2 2.2M5.6 18.4l2.2-2.2m8.4-8.4l2.2-2.2" stroke="#00D2FF" strokeLinecap="round" />
        </svg>
      );

    case "Tailwind CSS":
      return (
        <svg viewBox="0 0 128 128" className={className}>
          <path d="M64 32C42.7 32 32 42.7 32 64c5.3-10.7 13.3-16 24-16 10.7 0 18.7 5.3 24 16 5.3 10.7 13.3 16 24 16 21.3 0 32-10.7 32-32-5.3 10.7-13.3 16-24 16-10.7 0-18.7-5.3-24-16-5.3-10.7-13.3-16-24-16zm-32 32C10.7 64 0 74.7 0 96c5.3-10.7 13.3-16 24-16 10.7 0 18.7 5.3 24 16 5.3 10.7 13.3 16 24 16 21.3 0 32-10.7 32-32-5.3 10.7-13.3 16-24 16-10.7 0-18.7-5.3-24-16-5.3-10.7-13.3-16-24-16z" fill="#38BDF8" />
        </svg>
      );

    case "Node.js":
    case "Node":
      return (
        <svg viewBox="0 0 128 128" className={className}>
          <path d="M64 12l48 27.7v55.4L64 122.8 16 95.1V39.7L64 12z" fill="#5FA04E" />
          <path d="M64 24.5L26.8 46v42.9L64 110.4l37.2-21.5V46L64 24.5z" fill="#333333" />
          <path d="M64 35l25 14.4v28.8L64 92.6 39 78.2V49.4L64 35z" fill="#5FA04E" />
        </svg>
      );

    case "Python":
      return (
        <svg viewBox="0 0 128 128" className={className}>
          <path d="M63.5 10.8c-26.6 0-25 11.5-25 11.5l.03 11.9h25.5v3.6H26.3S11 36.1 11 62.7c0 26.6 13.3 25.6 13.3 25.6h7.9V77.1c0-11.2 9.6-11.2 9.6-11.2h25.4s9.2.2 9.2-8.9V20.2s1.4-9.4-22.9-9.4zm-7.3 7.2c2.4 0 4.4 2 4.4 4.4s-2 4.4-4.4 4.4-4.4-2-4.4-4.4 2-4.4 4.4-4.4z" fill="#3776AB" />
          <path d="M64.5 117.2c26.6 0 25-11.5 25-11.5l-.03-11.9H63.9v-3.6h37.7s15.3 1.7 15.3-24.9c0-26.6-13.3-25.6-13.3-25.6h-7.9v11.2c0 11.2-9.6 11.2-9.6 11.2H50.7s-9.2-.2-9.2 8.9v36.8s-1.4 9.4 23 9.4zm7.3-7.2c-2.4 0-4.4-2-4.4-4.4s2-4.4 4.4-4.4 4.4 2 4.4 4.4-2 4.4-4.4 4.4z" fill="#FFD43B" />
        </svg>
      );

    case "Scala":
      return (
        <svg viewBox="0 0 128 128" className={className}>
          <path d="M18 20c32 10 60 10 92 0v24c-32 10-60 10-92 0V20z" fill="#DE3423" />
          <path d="M18 52c32 10 60 10 92 0v24c-32 10-60 10-92 0V52z" fill="#DE3423" />
          <path d="M18 84c32 10 60 10 92 0v24c-32 10-60 10-92 0V84z" fill="#DE3423" />
        </svg>
      );

    case "Php":
    case "PHP":
      return (
        <svg viewBox="0 0 128 128" className={className}>
          <ellipse cx="64" cy="64" rx="58" ry="34" fill="#777BB4" />
          <path d="M36 50h14c6 0 10 3 10 8s-4 8-10 8h-7l-3 12H30l6-28zm10 11h4c2 0 4-1 4-3s-2-3-4-3h-3l-1 6zm20-11h10l-4 18h7l4-18h10l-6 28H77l2-10h-7l-2 10H60l6-28zm30 0h14c6 0 10 3 10 8s-4 8-10 8h-7l-3 12H84l6-28zm10 11h4c2 0 4-1 4-3s-2-3-4-3h-3l-1 6z" fill="#FFF" />
        </svg>
      );

    case "Laravel":
      return (
        <svg viewBox="0 0 128 128" className={className}>
          <path d="M110.3 35.8L74.8 56.4 56.5 45.8l35.5-20.6 18.3 10.6zm-53.7 20l35.5-20.6V56l-35.5 20.6V55.8zm-1.8 1.1L19.4 36.3 37.7 25.7l35.5 20.6-18.4 10.6zm18.4 10.6l35.5-20.6v20.8L73.2 88.3V67.5zm-1.8 1.1L35.9 48v20.8l35.5 20.6V68.6zm-18.4-10.6L17.5 47.4v41.6L53 109.6V88.8l-35.5-20.6V58z" fill="#FF2D20" />
        </svg>
      );

    case "Django":
      return (
        <svg viewBox="0 0 128 128" className={className}>
          <rect width="128" height="128" rx="20" fill="#092E20" />
          <path d="M68 36h14v39.4c0 10.3-4.9 16.6-14.8 16.6-4.7 0-9.2-1.3-12.2-3.4l3.4-10.3c2 1.4 4.8 2.3 7.6 2.3 4.8 0 7-3.1 7-8.8V36zm-22 23.4h14v22.8c-2.4 1.3-6.2 2.2-10.3 2.2-9.7 0-15.7-5.9-15.7-16 0-9.9 6.4-16.3 16.5-16.3 2.2 0 4.1.3 5.5.8v6.5zm0 18.2v-7.6c-.9-.4-2.1-.6-3.4-.6-4.5 0-7.3 2.8-7.3 7.5 0 4.6 2.6 7.4 6.9 7.4 1.8 0 3-.3 3.8-.7z" fill="#44B78B" />
        </svg>
      );

    case "WordPress":
      return (
        <svg viewBox="0 0 128 128" className={className}>
          <circle cx="64" cy="64" r="56" fill="#21759B" />
          <path d="M16.5 64c0 18.2 10.2 34 25.2 42L18.4 42.6C17.2 49.3 16.5 56.6 16.5 64zm73.9-3.3c0-6-2.2-10.2-4.1-13.6-2.6-4.1-5-7.7-5-11.8 0-4.6 3.5-8.9 8.4-8.9.2 0 .4 0 .7.1C80.8 20.3 72.8 17 64 17c-17.6 0-33.1 9.7-41.2 24.1 1.2 0 2.3.1 3.2.1 5.3 0 13.5-.7 13.5-.7 2.8-.2 3.1 3.9.3 4.2 0 0-2.8.3-5.9.5l18.8 55.9 11.3-33.9-8-22c-2.8-.2-5.5-.5-5.5-.5-2.8-.2-2.4-4.4.3-4.2 0 0 8.4.7 13.4.7 5.3 0 13.5-.7 13.5-.7 2.8-.2 3.1 3.9.3 4.2 0 0-2.8.3-5.9.5l18.6 55.3 5.1-17.1c2.4-7.8 4.2-13.4 4.2-18.3zm-39.7 4.7L34 113.6c9.3 4.6 19.8 7.2 30.9 7.2 7.7 0 15.1-1.3 22-3.7-.6-.9-1.2-2-1.7-3.1L50.7 65.4zm50.6-22.1c.4 2.8.6 5.8.6 9.1 0 9-1.7 19.1-6.8 32l15.5-44.8c-2.8-5.7-6-10.9-9.3-16.3z" fill="#FFF" />
        </svg>
      );

    case "Shopify":
      return (
        <svg viewBox="0 0 128 128" className={className}>
          <path d="M103.8 33.6c-.3-.8-1-1.3-1.8-1.4l-15.5-1.5-11.5-23c-.4-.8-1.2-1.3-2.1-1.3s-1.7.5-2.1 1.3L59.3 30.7l-15.5 1.5c-.8.1-1.5.6-1.8 1.4-.3.8-.2 1.7.4 2.3l11.8 12.5-3.3 27.6c-.1.9.3 1.7 1 2.2.7.5 1.6.5 2.3.1l24.8-14.7 24.8 14.7c.4.2.8.3 1.2.3.4 0 .8-.1 1.1-.3.7-.5 1.1-1.3 1-2.2l-3.3-27.6 11.8-12.5c.6-.6.7-1.5.4-2.3z" fill="#95BF47" />
          <path d="M74.8 42.4c-7.3 1.8-10.2 6.5-10.2 12 0 8.6 8.3 11.4 12.8 14.8 4.8 3.6 5.2 6.8 5.2 9.5 0 6.6-5.8 9.8-12.4 9.8-8.7 0-14.3-5-14.3-5l-2.4 8.6s6 4.3 16.4 4.3c13.4 0 21.6-7.8 21.6-18.7 0-9.8-8.2-13.6-13.8-17-4.1-2.5-5.2-4.8-5.2-7.5 0-4.1 3.5-7.1 9.4-7.1 6.5 0 10.8 3.2 10.8 3.2l2.4-8.5s-4.3-3.2-12.7-3.2z" fill="#FFF" />
        </svg>
      );

    case "Webflow":
      return (
        <svg viewBox="0 0 128 128" className={className}>
          <path d="M128 32L93.3 96H62.7L78 68.3 54.7 96H24L48 68.3 24 32h28.7l13.3 22.7L79.3 32H128z" fill="#4353FF" />
        </svg>
      );

    case "PostgreSQL":
      return (
        <svg viewBox="0 0 128 128" className={className}>
          <path d="M64 12C35.3 12 12 35.3 12 64s23.3 52 52 52 52-23.3 52-52S92.7 12 64 12zm0 18c18.8 0 34 15.2 34 34s-15.2 34-34 34-34-15.2-34-34 15.2-34 34-34z" fill="#336791" />
          <path d="M64 36c-15.5 0-28 12.5-28 28s12.5 28 28 28 28-12.5 28-28-12.5-28-28-28zm0 12c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16z" fill="#FFF" />
        </svg>
      );

    case "Redis":
      return (
        <svg viewBox="0 0 128 128" className={className}>
          <path d="M14 46l50-20 50 20-50 20-50-20z" fill="#D82C20" />
          <path d="M14 62l50 20 50-20v14l-50 20-50-20V62z" fill="#A81F17" />
          <path d="M14 82l50 20 50-20v14l-50 20-50-20V82z" fill="#751510" />
        </svg>
      );

    case "Docker":
      return (
        <svg viewBox="0 0 128 128" className={className}>
          <path d="M118 64c-2.4-1.2-5.4-1.2-8.4 0-1.2-7.2-6.6-13.2-14.4-15.6l-3.6-1.2-2.4 3.6c-3 4.2-4.2 9.6-3.6 15-4.2-2.4-9-3-14.4-1.8H8v12c0 24 19.2 44.4 43.2 44.4 33.6 0 58.8-19.2 64.8-44.4 3.6 0 7.2-1.2 9.6-3.6 3.6-3.6 4.8-8.4 3.6-13.2l-1.2-4.8-10 9.6zM28 60h12v12H28V60zm16 0h12v12H44V60zm16 0h12v12H60V60zm16 0h12v12H76V60zm-48-16h12v12H28V44zm16 0h12v12H44V44zm16 0h12v12H60V44zm16 0h12v12H76V44zm-16-16h12v12H60V28z" fill="#2496ED" />
        </svg>
      );

    case "AWS":
      return (
        <svg viewBox="0 0 128 128" className={className}>
          <path d="M64 94c21.4 0 40.6-7.8 55.4-20.8 1.8-1.6 1.2-4.2-1-4.6-2.2-.4-4.2.8-5.6 2-13 11.4-30 18.2-48.8 18.2-20.2 0-38.6-7.8-52.2-20.6-1.4-1.4-3.6-1.8-5.2-.6-1.8 1.2-2 3.6-.8 5.2C21.6 86 41.8 94 64 94z" fill="#FF9900" />
          <path d="M117.8 68.4c-1.8-2.4-9.8-1.2-14.4-.6-1.4.2-1.8 1.8-.6 2.6 7.4 5.2 12.8 3.8 14.4 1.4.6-.8.8-1.8.6-3.4z" fill="#FF9900" />
          <path d="M37.8 40.2c0-5.8 4.2-9.4 11-9.4 6 0 9.8 2.6 11.4 6.6l5-3c-2.8-5.8-8.6-9.6-16.4-9.6-11.4 0-18.4 6.8-18.4 16.4 0 15 20.8 12.4 20.8 19.6 0 6.6-5.2 9.4-11.8 9.4-7 0-11.6-3.4-13.2-7.8l-5.2 3c2.6 6.8 9.4 10.8 18.4 10.8 12.2 0 19.4-6.6 19.4-16.4 0-15.6-21-12.8-21-19.6z" fill="currentColor" />
        </svg>
      );

    case "Flutter":
      return (
        <svg viewBox="0 0 128 128" className={className}>
          <path d="M78 14L24 68l16 16L94 30H78v-16z" fill="#02569B" />
          <path d="M78 72L50 100l16 16 28-28H78v-16z" fill="#0175C2" />
          <path d="M94 88L78 104h16l16-16H94z" fill="#29B6F6" />
        </svg>
      );

    case "OpenAI API":
    case "OpenAI":
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M12 2a4 4 0 00-3.5 2.1l-.8 1.4A4 4 0 005 8v1.6A4 4 0 004 13a4 4 0 002.5 3.7l.8 1.4A4 4 0 0011 20h2a4 4 0 003.5-2.1l.8-1.4A4 4 0 0019 14v-1.6A4 4 0 0020 9a4 4 0 00-2.5-3.7l-.8-1.4A4 4 0 0013 2h-1z" stroke="#10A37F" />
          <circle cx="12" cy="12" r="3" stroke="#10A37F" />
        </svg>
      );

    default:
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeOpacity="0.4" />
          <path d="M12 7v5l3 3" stroke="currentColor" />
        </svg>
      );
  }
}

export default TechLogo;