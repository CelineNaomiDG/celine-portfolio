import { useId } from 'react';

export function RaceCar({paint, wheels, stripe, thrust}: {paint: string; wheels: string; stripe: boolean; thrust: boolean}) {
  const id = useId().replaceAll(':','');
  return <svg viewBox="0 0 180 72" width="100%" height="100%" aria-hidden="true" style={{overflow:'visible'}}>
    <defs>
      <linearGradient id={`${id}-paint`} x1="0" y1="0" x2="0" y2="1"><stop stopColor="#fff" stopOpacity=".85"/><stop offset=".35" stopColor={paint}/><stop offset=".68" stopColor={paint}/><stop offset="1" stopColor="#17222e"/></linearGradient>
      <linearGradient id={`${id}-glass`} x2="1" y2="1"><stop stopColor="#bddbe7"/><stop offset=".45" stopColor="#324b60"/><stop offset="1" stopColor="#10212d"/></linearGradient>
    </defs>
    <ellipse cx="91" cy="65" rx="81" ry="4" fill="#a3d5e2" opacity=".18"/>
    {thrust && <g><path d="M17 43-40 49 17 55M44 58 48 96 55 58M130 58 137 96 144 58" fill="#91dbe9" opacity=".65"/><path d="M15 46-19 49 15 51M47 59 49 82 52 59M134 59 137 82 140 59" fill="#edfcff"/></g>}
    <path d="M10 41 42 33 61 18Q75 11 99 19L124 33 157 37Q170 39 174 48L169 57H13Q6 53 10 41Z" fill={`url(#${id}-paint)`} stroke="#6c8493" strokeWidth=".8"/>
    <path d="M48 33 66 20Q79 16 96 22L113 33Z" fill={`url(#${id}-glass)`}/>
    <path d="m81 18 5 15M47 35l3 17 62 1 9-17" fill="none" stroke="#233846" strokeWidth="1" opacity=".7"/>
    <path d="M15 39 44 35M117 34l42 6" stroke="#fff" strokeWidth="1.3" opacity=".8"/>
    <path d="m117 42 20-2-9 10h-17Z" fill="#172631"/>
    <path d="M13 53h155l-9 7H22Z" fill="#17232d"/>
    {stripe && <path d="M55 54h64l7-3" fill="none" stroke="#e9fbff" strokeWidth="2"/>}
    <path d="M13 39h15" stroke="#ed8b80" strokeWidth="2.6"/>
    <path d="m153 41 15 3" stroke="#efffff" strokeWidth="3"/>
    <path d="m169 42 44-8v24l-44-13Z" fill="#d3f3ff" opacity=".08"/>
    {[40,143].map(x => <g key={x}>
      <circle cx={x} cy="54" r="13" fill="#0a1017"/>
      <circle cx={x} cy="54" r="9.8" fill={wheels === 'aero' ? '#9eafb8':'#253a49'} stroke="#dce8ee" strokeWidth="1"/>
      {wheels === 'sport' ? Array.from({length:5},(_,i)=><path key={i} d={`M${x} 54l-2-9 4 1Z`} fill="#c7dae3" transform={`rotate(${i*72} ${x} 54)`}/>) : <><circle cx={x} cy="54" r="6" fill="#5b727f"/><path d={`M${x-8} 51h16M${x-8} 57h16`} stroke="#d9e4e9" strokeWidth="1.2"/></>}
      <circle cx={x} cy="54" r="2" fill="#e7f5fb"/>
    </g>)}
  </svg>;
}
