import Link from "next/link";

interface Props {
  hasHomeButton?: boolean;
}

export default function Footer({hasHomeButton}:Props) {
  return (
    <footer className={`h-[25px] absolute bottom-0 pr-[5vw]  md:pr-[40px] bg-lagoon-500 w-full flex ${hasHomeButton ? "justify-between" : "justify-end"} items-center text-white text-sm font-body`}>
      { hasHomeButton &&
      <Link href="/" title="Zurück zur Startseite" className="transition-color bg-scorch-500 hover:bg-scorch-300 h-full flex items-center pl-[2vw] md:pl-[15px] pr-[3vw] md:pr-[20px]">←</Link>
      }
      <div className="flex">
      <Link title="Über Uns" className="transition-color hover:bg-lagoon-300 h-full flex items-center px-[3vw] md:px-[20px]" href="/about">Über Uns </Link>
      <Link title="DSGVO" className="transition-color hover:bg-lagoon-300 h-full flex items-center px-[3vw] md:px-[20px]" href="/dsgvo">DSGVO </Link>
      <Link title="Impressum" className="transition-color hover:bg-lagoon-300 h-full flex items-center px-[3vw] md:px-[20px]" href="/imprint">Impressum </Link>
      <a title="Github, diese Website ist open-source" className="transition-color hover:bg-lagoon-300 h-full flex items-center px-[5px] md:px-[20px]" href="https://github.com/philparzer/ampass" target="_blank" rel="noopener noreferrer">
        <svg
          width="18"
          height="19"
          viewBox="0 0 18 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_35_111)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9 0.819458C4.0275 0.819458 0 4.84696 0 9.81946C0 13.802 2.57625 17.1657 6.15375 18.3582C6.60375 18.437 6.7725 18.167 6.7725 17.9307C6.7725 17.717 6.76125 17.0082 6.76125 16.2545C4.5 16.6707 3.915 15.7032 3.735 15.197C3.63375 14.9382 3.195 14.1395 2.8125 13.9257C2.4975 13.757 2.0475 13.3407 2.80125 13.3295C3.51 13.3182 4.01625 13.982 4.185 14.252C4.995 15.6132 6.28875 15.2307 6.80625 14.9945C6.885 14.4095 7.12125 14.0157 7.38 13.7907C5.3775 13.5657 3.285 12.7895 3.285 9.34696C3.285 8.36821 3.63375 7.55821 4.2075 6.92821C4.1175 6.70321 3.8025 5.78071 4.2975 4.54321C4.2975 4.54321 5.05125 4.30696 6.7725 5.46571C7.4925 5.26321 8.2575 5.16196 9.0225 5.16196C9.7875 5.16196 10.5525 5.26321 11.2725 5.46571C12.9938 4.29571 13.7475 4.54321 13.7475 4.54321C14.2425 5.78071 13.9275 6.70321 13.8375 6.92821C14.4113 7.55821 14.76 8.35696 14.76 9.34696C14.76 12.8007 12.6563 13.5657 10.6538 13.7907C10.98 14.072 11.2613 14.612 11.2613 15.4557C11.2613 16.6595 11.25 17.627 11.25 17.9307C11.25 18.167 11.4188 18.4482 11.8688 18.3582C15.4238 17.1657 18 13.7907 18 9.81946C18 4.84696 13.9725 0.819458 9 0.819458Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_35_111">
              <rect
                width="18"
                height="18"
                fill="white"
                transform="translate(0 0.819458)"
              />
            </clipPath>
          </defs>
        </svg>
      </a>
      </div>
    </footer>
  );
}
