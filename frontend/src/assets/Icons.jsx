export function LinkedIcon({ size = 48, color = "#69AFBF" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 382 382"
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
    >
      <path d="M347 0H35C15.7 0 0 15.7 0 35v312c0 19.3 15.7 35 35 35h312c19.3 0 35-15.7 35-35V35c0-19.3-15.7-35-35-35zM118.8 320.4H59V147.7h59.8v172.7zm-29.9-196c-19.2 0-34.7-15.6-34.7-34.8s15.6-34.8 34.7-34.8 34.7 15.6 34.7 34.8-15.5 34.8-34.7 34.8zM323 320.4h-59.8V236c0-20.2-.4-46.1-28.1-46.1-28.2 0-32.5 22-32.5 44.6v85.9h-59.8V147.7h57.4v23.5h.8c8-15.2 27.6-31.3 56.9-31.3 60.9 0 72.1 40.1 72.1 92.2v88.3z" />
    </svg>
  );
}

export function GithubIcon({ size = 48, color = "#000" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
    >
      <path d="M12 .297c-6.63 0-12 5.373-12 
      12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 
      0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.084-.729.084-.729 
      1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.807 1.305 3.492.998.108-.775.418-1.305.76-1.605-2.665-.305-5.466-1.332-5.466-5.93 
      0-1.31.465-2.38 1.235-3.22-.135-.304-.54-1.527.105-3.176 
      0 0 1.005-.322 3.3 1.23a11.5 11.5 0 013.003-.404c1.02.005 2.045.138 3.003.404 
      2.28-1.552 3.285-1.23 3.285-1.23.645 1.649.24 2.872.12 3.176.765.84 
      1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.37.81 1.096.81 2.22 
      0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 
      24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
    </svg>
  );
}


export function HomeIcon({ size = 48, color = "#69AFBF" }) {

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
      style={{ cursor: "pointer", transform: "translateY(-4px)" }}
    >
      <path d="M12 3l9 8h-3v9h-12v-9H3l9-8z" />
    </svg>)



}

export function SearchIcon({ size = 24, color = "", onClick }) {
  return (
    <svg width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
      style={{ cursor: "pointer" }}
      onClick={onClick}>


      <path d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
    </svg>
  )
}

export function ImageIcon({ size = 48, color = "#69AFBF" }) {
  return (
    <svg
      fill={color}
      width={size}
      height={size}
      style={{ transform: "translate(4px,6px)" }}
      viewBox="0 0 32 32"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg">
      <title>image</title>
      <path d="M0 26.016q0 2.496 1.76 4.224t4.256 1.76h20q2.464 0 4.224-1.76t1.76-4.224v-20q0-2.496-1.76-4.256t-4.224-1.76h-20q-2.496 0-4.256 1.76t-1.76 4.256v20zM4 26.016v-20q0-0.832 0.576-1.408t1.44-0.608h20q0.8 0 1.408 0.608t0.576 1.408v20q0 0.832-0.576 1.408t-1.408 0.576h-20q-0.832 0-1.44-0.576t-0.576-1.408zM6.016 24q0 0.832 0.576 1.44t1.408 0.576h16q0.832 0 1.408-0.576t0.608-1.44v-0.928q-0.224-0.448-1.12-2.688t-1.6-3.584-1.28-2.112q-0.544-0.576-1.12-0.608t-1.152 0.384-1.152 1.12-1.184 1.568-1.152 1.696-1.152 1.6-1.088 1.184-1.088 0.448q-0.576 0-1.664-1.44-0.16-0.192-0.48-0.608-1.12-1.504-1.6-1.824-0.768-0.512-1.184 0.352-0.224 0.512-0.928 2.24t-1.056 2.56v0.64zM6.016 9.024q0 1.248 0.864 2.112t2.112 0.864 2.144-0.864 0.864-2.112-0.864-2.144-2.144-0.864-2.112 0.864-0.864 2.144z"></path>
    </svg>
  )
}

export function SaveIcon(size = 64, color = "#40311E"){

  return (
    <svg
      fill={color}
      width={22}
      height={22}
      style={{transform:"translateY(5px)"}}
      viewBox="0 0 32 32"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg">
      <title>save</title>
      <path d="M9.467 3.106h3.030c0.266 0 0.482 0.278 0.482 0.621v4.374c0 0.343-0.216 0.621-0.482 0.621h-3.030c-0.266 0-0.482-0.278-0.482-0.621v-4.374c0-0.343 0.216-0.621 0.482-0.621zM21.964 14.524l7.987 7.987h-3.993v7.987h-7.987v-7.987h-3.993l7.987-7.987zM17.422 24.768h-10.309c-0.276 0-0.499-0.223-0.499-0.499v-11.481c0-0.276 0.223-0.499 0.499-0.499h17.721c0.276 0 0.499 0.223 0.499 0.499v4.402l3.12 3.12v-13.262c0-0.276-4.216-4.493-4.493-4.493h-4.741c0.169 0.069 0.287 0.223 0.287 0.404v6.181c0 0.244-0.216 0.442-0.482 0.442h-10.594c-0.266 0-0.482-0.198-0.482-0.442v-6.181c0-0.18 0.118-0.335 0.287-0.404h-4.242c-0.277 0-0.499 0.223-0.499 0.499v23.961c0 0.277 0.223 0.499 0.499 0.499h13.429v-2.746zM26.506 22.903v4.611h1.449c0.277 0 0.499-0.223 0.499-0.499v-4.111l-1.948 0z"></path>
    </svg>
  )

}

export function CompleteIcon(color, size){

return <svg xmlns="http://www.w3.org/2000/svg" 
fill="#15f400ff" 
width="64px" 
height="64px" 
viewBox="0 0 1920.00 1920.00" 
stroke="#37ff00ff" 
stroke-width="0.019200000000000002" transform="rotate(0)"
style={{}}>



<g id="SVGRepo_bgCarrier" stroke-width="0"/>

<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

<g id="SVGRepo_iconCarrier"> <path d="M854.344 1317.685 503.209 966.55l79.85-79.85 271.285 271.285 520.207-520.32 79.849 79.962-600.056 600.057ZM960.056 0c-529.355 0-960 430.645-960 960s430.645 960 960 960c529.243 0 960-430.645 960-960S1489.3 0 960.056 0Z" fill-rule="evenodd"/> </g>

</svg>
}

export function ErrorIcon(size = 12, color = "black"){
  return(
    <svg fill={color} 
    height={size}
    width={size}
    style={{ width:"100%"}}
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm-1.5-5.009c0-.867.659-1.491 1.491-1.491.85 0 1.509.624 1.509 1.491 0 .867-.659 1.509-1.509 1.509-.832 0-1.491-.642-1.491-1.509zM11.172 6a.5.5 0 0 0-.499.522l.306 7a.5.5 0 0 0 .5.478h1.043a.5.5 0 0 0 .5-.478l.305-7a.5.5 0 0 0-.5-.522h-1.655z" ></path></g></svg>
  )
}
