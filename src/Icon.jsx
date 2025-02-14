function Icon({ type }) {
  if (type === "cross") {
    return (
      <svg
        className="icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 36 36"
      >
        <path fill="#DD551F" d="M6 28h24v8H6z" />
        <path
          fill="#FFAC33"
          d="M21.906 1.262c-2.02-.654-6.772-.475-7.96 1.069-3.089.059-6.713 2.851-7.188 6.535-.47 3.645.578 5.338.951 8.079.422 3.106 2.168 4.099 3.564 4.515C13.281 24.114 15.415 24 19 24c7 0 10.334-4.684 10.629-12.639.178-4.812-2.645-8.456-7.723-10.099z"
        />
        <path
          fill="#FFDC5D"
          d="M25.909 11.701c-.677-.938-1.545-1.693-3.446-1.96.713.327 1.396 1.455 1.485 2.079.089.624.178 1.129-.386.505-2.26-2.499-4.722-1.515-7.162-3.041-1.704-1.066-2.223-2.246-2.223-2.246s-.208 1.574-2.792 3.178c-.749.465-1.643 1.5-2.139 3.03C8.889 14.345 9 15.325 9 17c0 4.889 4.029 9 9 9s9-4.147 9-9c0-3.041-.319-4.229-1.091-5.299z"
        />
        <path
          fill="#C1694F"
          d="M19 19.5h-2c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h2c.276 0 .5.224.5.5s-.224.5-.5.5z"
        />
        <path
          fill="#662113"
          d="M14 16c-.552 0-1-.448-1-1v-1c0-.552.448-1 1-1s1 .448 1 1v1c0 .552-.448 1-1 1zm8 0c-.553 0-1-.448-1-1v-1c0-.552.447-1 1-1s1 .448 1 1v1c0 .552-.447 1-1 1z"
        />
        <path
          fill="#F9CA55"
          d="M3.195 18.025c.263-.484.776-.74 1.268-.694.034-.064 7.084 2.942 7.084 2.942l-1.268 1.547c-.7.854-1.907 1.023-2.696.376l-1.677-1.375-2.26-1.137c-.586-.297-.788-1.039-.451-1.659z"
        />
        <path
          fill="#FFDC5D"
          d="M.365 14.985c-.35.427-.315 1.035.08 1.359l4.917 2.738 3.569 2.926c.395.323.998.239 1.348-.188l1.268-1.547-1.428-1.17-3.223-1.893-5.183-2.413c-.001 0-.998-.239-1.348.188z"
        />
        <path
          fill="#FA743E"
          d="M9.52 18.438s19.597 8.657 20.108 8.884c1.19.529 3.154 1.7 3.154 3.678l-.351 4.75c0 .138-.112.25-.25.25h-3.323c-.05 0-.098-.015-.139-.043L9.279 22.898c-.069-.046-.111-.124-.111-.207v-4.025c.001-.181.186-.302.352-.228z"
        />
        <path
          fill="#DD551F"
          d="M18.226 22.266l-.779-.324-6.462 2.109 1.482 1.031zm5.203 2.316l1.007.445-5.175 4.594-3.821-.025z"
        />
        <path
          fill="#F9CA55"
          d="M32.752 18.025c-.263-.484-.776-.74-1.268-.694-.034-.064-7.084 2.942-7.084 2.942l1.268 1.547c.7.854 1.907 1.023 2.696.376l1.677-1.375 2.26-1.137c.586-.297.788-1.039.451-1.659z"
        />
        <path
          fill="#FFDC5D"
          d="M35.582 14.985c.35.427.315 1.035-.08 1.359l-4.917 2.738-3.569 2.926c-.395.323-.998.239-1.348-.188L24.4 20.273l1.428-1.17 3.223-1.892 5.183-2.413c0-.001.998-.24 1.348.187z"
        />
        <path
          fill="#FA743E"
          d="M26.427 18.438S6.83 27.095 6.319 27.322c-1.19.529-3.154 1.7-3.154 3.678l.351 4.75c0 .138.112.25.25.25h3.323c.05 0 .098-.015.139-.043l19.439-13.059c.069-.046.111-.124.111-.207v-4.025c0-.181-.186-.302-.351-.228z"
        />
      </svg>
    );
  } else if (type === "naught") {
    return (
      <svg
        className="icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 36 36"
      >
        <path
          fill="#FFAC33"
          d="M19 0c-1.721 0-3.343.406-4.793 1.111C13.814 1.043 13.412 1 13 1 9.134 1 6 4.134 6 8v12h.018C6.201 26.467 11.489 31.656 18 31.656S29.799 26.467 29.982 20H30v-9c0-6.075-4.925-11-11-11z"
        />
        <path
          fill="#9268CA"
          d="M32 6.625L29 5l-2 1.625s3 7.25 3 11.125S27 27 27 27H9s-3-5.375-3-9.25S9 6.625 9 6.625L7 5 4 6.625S0 13.75 0 17.75 6 36 6 36h24s6-14.25 6-18.25-4-11.125-4-11.125z"
        />
        <path
          fill="#FFDC5D"
          d="M14 5s-.003 5.308-5 5.936V17c0 3.917 2.507 7.24 6 8.477V28c0 1.657 1.343 3 3 3s3-1.343 3-3v-2.523c3.493-1.237 6-4.56 6-8.477v-5.019C15.89 11.605 14 5 14 5z"
        />
        <path fill="#DF1F32" d="M22 21h-8s1 2 4 2 4-2 4-2z" />
        <path
          fill="#C1694F"
          d="M19 19.5h-2c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h2c.276 0 .5.224.5.5s-.224.5-.5.5z"
        />
        <path
          fill="#662113"
          d="M14 16c-.552 0-1-.448-1-1v-1c0-.552.448-1 1-1s1 .448 1 1v1c0 .552-.448 1-1 1zm8 0c-.553 0-1-.448-1-1v-1c0-.552.447-1 1-1s1 .448 1 1v1c0 .552-.447 1-1 1z"
        />
        <path
          fill="#FFDC5D"
          d="M19.24 2.396c.042-.521.593-.727 1.146-.708 0 0 5.456.311 7.521 1.271C30.522 4.174 32 6.625 32 6.625h-5S25.917 5.104 25.062 4.5c-.881-.623-4.222-1.215-4.719-1.312s-1.145-.271-1.103-.792zm-2.48 0c-.042-.521-.593-.727-1.146-.708 0 0-5.456.311-7.521 1.271C5.478 4.174 4 6.625 4 6.625h5s1.083-1.521 1.938-2.125c.881-.623 4.222-1.215 4.719-1.312.496-.098 1.145-.271 1.103-.792z"
        />
      </svg>
    );
  } else if (type === "shrug") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
        <path
          fill="#FFAC33"
          d="M19 0c-1.721 0-3.343.406-4.793 1.111C13.814 1.043 13.412 1 13 1 9.134 1 6 4.134 6 8v12h.018C6.201 26.467 11.489 31.656 18 31.656S29.799 26.467 29.982 20H30v-9c0-6.075-4.925-11-11-11z"
        />
        <path
          fill="#9268CA"
          d="M27 21H9c-2.209 0-4 1.791-4 4v11h26V25c0-2.209-1.791-4-4-4z"
        />
        <path
          fill="#FFDC5D"
          d="M14 5s-.003 5.308-5 5.936V17c0 4.971 4.029 9 9 9s9-4.029 9-9v-5.019C15.89 11.605 14 5 14 5z"
        />
        <path fill="#7450A8" d="M10 27h1v9h-1z" />
        <path
          fill="#FCAB40"
          d="M4.702 26.495l-.283-.059h-.511c0-.058.023-.112.035-.169-.348-.215-.546-.625-.458-1.048.112-.542.643-.89 1.186-.779l2.091.433h1.676c.863 0 1.562.7 1.562 1.564V28H6.253s-1.481-.669-1.551-1.505z"
        />
        <path
          fill="#FFDC5D"
          d="M0 25.655c0-.432.35-.782.781-.782l4.69.782h3.747c.432 0 .781.351.781.781V28H5L.781 26.437S0 26.087 0 25.655z"
        />
        <path fill="#9268CA" d="M4 36h6v-8H5z" />
        <path fill="#7450A8" d="M25 27h1v9h-1z" />
        <path
          fill="#FCAB40"
          d="M31.298 26.495l.283-.059h.511c0-.058-.023-.112-.035-.169.348-.215.546-.625.458-1.048-.112-.542-.642-.89-1.185-.779l-2.091.433h-1.676c-.863 0-1.562.7-1.562 1.564V28h3.747c-.001 0 1.48-.669 1.55-1.505z"
        />
        <path
          fill="#FFDC5D"
          d="M36 25.655c0-.432-.35-.782-.781-.782l-4.691.782h-3.747c-.432 0-.781.351-.781.781V28h5l4.219-1.563s.781-.35.781-.782z"
        />
        <path fill="#9268CA" d="M32 36h-6v-8h5z" />
        <path
          fill="#BF6952"
          d="M19 19.5h-2c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h2c.276 0 .5.224.5.5s-.224.5-.5.5z"
        />
        <path
          fill="#DF1F32"
          d="M20.5 23H20c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h.5c.276 0 .5.224.5.5s-.224.5-.5.5z"
        />
        <path
          fill="#662113"
          d="M14 16c-.552 0-1-.448-1-1v-1c0-.552.448-1 1-1s1 .448 1 1v1c0 .552-.448 1-1 1zm8 0c-.553 0-1-.448-1-1v-1c0-.552.447-1 1-1s1 .448 1 1v1c0 .552-.447 1-1 1z"
        />
      </svg>
    );
  } else {
    return;
  }
}

export default Icon;
