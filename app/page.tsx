'use client';

import { useEffect, useRef, useState } from 'react';
import { GitFork, Mail } from 'lucide-react';

const projects = [
  { title:'FamilyOS', state:'In Progress · Not production-ready', desc:'A family collaboration and safety product in active development. Current evidence covers Swift/SwiftUI flows, role-based restrictions, account linking, Firebase backend work, successful builds and automated tests.', tags:['Swift','SwiftUI','Firebase','Testing'] },
  { title:'Angular Task Management App', state:'Learning project', desc:'A responsive task-management project exploring Angular component architecture, TypeScript, reactive patterns and state management.', tags:['Angular','TypeScript','Responsive Design'] },
  { title:'React Data Visualization Dashboard', state:'Learning project', desc:'An interactive dashboard study focused on clean data presentation, filtering, component composition, hooks and user interaction patterns.', tags:['React','JavaScript','Data Visualization'] },
  { title:'C Programming Exercises — Codam Piscine', state:'Coursework', desc:'Intensive exercises in C fundamentals, memory management, algorithms and systems-level problem solving completed during the Codam Piscine.', tags:['C','Algorithms','Systems Programming'] },
  { title:'SQL & Python Data Pipeline', state:'Personal orientation project', desc:'A learning project inspired by the Make IT Work programme, exploring Python scripting, SQL design, data transformation, validation and reporting workflows.', tags:['Python','SQL','Data Pipeline'] },
];

const skillGroups = [
  { title:'Foundation', note:'Coursework and hands-on practice. Presented as foundational experience.', items:[['HTML','Semantic structure and accessibility.'],['CSS','Responsive layouts and interface styling.'],['JavaScript','DOM, events and asynchronous patterns.'],['C Programming','Pointers, memory and algorithms.']] },
  { title:'Active learning & use', note:'Current project and study focus.', items:[['Swift / SwiftUI','Mobile flows and state-driven interfaces in FamilyOS.'],['Angular','Component architecture and TypeScript patterns.'],['Python','OOP, debugging, testing and automation.'],['SQL','Queries, data modelling and validation.']] },
  { title:'Exploring next', note:'Deliberate growth toward applied AI/LLM engineering.', items:[['LLM Applications','Evaluation, prompting and RAG.'],['AI Agents','Tool calling and workflow automation.'],['Cloud & DevOps','Docker and Azure fundamentals.'],['Robotics & Creative Code','Interactive hardware-software systems.']] },
];

const education = [
  ['Bachelor Informatica','Open Universiteit · In Progress','Currently enrolled; developing computer-science and software-engineering foundations.'],
  ['Bit Academy','Development / AI & data orientation · In Progress','Active learning paths across development, data and applied AI.'],
  ['Codam Piscine','Codam — Amsterdam Coding School','Intensive C programming practice covering memory, algorithms and systems thinking.'],
  ['NHA Apps Maken & Apps Programmeren','Completed · Final grade 10','Web-application development with HTML, CSS, JavaScript and Angular.'],
  ['Make IT Work Orientation','Personal orientation project','Independent Python and SQL exploration inspired by the Hogeschool van Amsterdam programme.'],
];

const chips = ['Celine de Graaf','Bachelor Informatica','SwiftUI','Python + SQL','FamilyOS — In Progress','AI/LLM learning','Creative code','Remote opportunities'];

function ThemeButton(){
  const [dark,setDark]=useState(false);
  useEffect(()=>{const saved=localStorage.getItem('portfolio-theme'); const initial=saved?saved==='dark':matchMedia('(prefers-color-scheme: dark)').matches; setDark(initial); document.documentElement.classList.toggle('dark',initial)},[]);
  const toggle=()=>{const next=!dark;setDark(next);document.documentElement.classList.toggle('dark',next);localStorage.setItem('portfolio-theme',next?'dark':'light')};
  return <button className="themeButton" onClick={toggle} aria-label={dark?'Switch to light mode':'Switch to dark mode'} aria-pressed={dark}><span>{dark?'☀':'☾'}</span><span>{dark?'Light':'Dark'}</span></button>
}

function Eyes(){
  const [pupils,setPupils]=useState({x:0,y:0});
  useEffect(()=>{const move=(e:MouseEvent)=>{const x=(e.clientX/window.innerWidth-.5)*8;const y=(e.clientY/window.innerHeight-.5)*8;setPupils({x,y})};window.addEventListener('mousemove',move);return()=>window.removeEventListener('mousemove',move)},[]);
  return <div className="eyes" aria-hidden="true"><span><i style={{transform:`translate(${pupils.x}px,${pupils.y}px)`}}/></span><span><i style={{transform:`translate(${pupils.x}px,${pupils.y}px)`}}/></span></div>
}

function IOSWidgets({openMessage}:{openMessage:()=>void}){
  const [today,setToday]=useState({weekday:'Today',day:'—'});
  useEffect(()=>{const now=new Date();setToday({weekday:new Intl.DateTimeFormat('en',{weekday:'long'}).format(now),day:String(now.getDate())})},[]);
  return <aside className="iosWidgets" aria-label="Profile at a glance">
    <article className="iosWidget calendarWidget"><div className="widgetTop"><span>{today.weekday}</span><b>{today.day}</b></div><p>Open to remote entry-level software and AI opportunities.</p></article>
    <article className="iosWidget familyWidget"><div className="widgetIcon">F</div><span className="livePill"><i/> Building now</span><h2>FamilyOS</h2><p>SwiftUI · Firebase · Testing</p><small>In Progress · Not production-ready</small><a href="#case-study" aria-label="Open the FamilyOS case study">↗</a></article>
    <article className="iosWidget studyWidget"><span className="widgetSymbol">⌘</span><div><small>Current study</small><h3>Bachelor Informatica</h3><p>Open Universiteit · In Progress</p></div></article>
    <article className="iosWidget quickWidget"><small>Quick actions</small><div><button onClick={openMessage}><span><Mail size={17}/></span>Message</button><a href="/Celine_de_Graaf_CV_EN.pdf" target="_blank"><span>↓</span>CV EN</a><a href="/Celine_de_Graaf_CV_NL.pdf" target="_blank"><span>↓</span>CV NL</a><a href="https://github.com/CelineNaomiDG" target="_blank" rel="noreferrer"><span><GitFork size={17}/></span>GitHub</a></div></article>
  </aside>
}

function MessageModal({close}:{close:()=>void}){
  const [contact,setContact]=useState(''); const [message,setMessage]=useState('');
  const send=(e:React.FormEvent)=>{e.preventDefault();const body=`Contact: ${contact || 'Not provided'}\n\nMessage:\n${message}`;window.location.href=`mailto:celinedegraaf.tech@gmail.com?subject=${encodeURIComponent('Portfolio message')}&body=${encodeURIComponent(body)}`};
  useEffect(()=>{const key=(e:KeyboardEvent)=>{if(e.key==='Escape')close()};window.addEventListener('keydown',key);return()=>window.removeEventListener('keydown',key)},[close]);
  return <div className="modalBack" role="presentation" onMouseDown={e=>{if(e.target===e.currentTarget)close()}}><section className="messageModal" role="dialog" aria-modal="true" aria-labelledby="message-title"><button className="modalClose" onClick={close} aria-label="Close message form">×</button><p className="kicker">Message me</p><h2 id="message-title">Start a conversation.</h2><p>Leave your contact details and message. Sending opens your email app; this portfolio does not store your information.</p><form onSubmit={send}><label>Your email, phone or profile<input value={contact} onChange={e=>setContact(e.target.value)} placeholder="How can I reply?"/></label><label>Your message<textarea required value={message} onChange={e=>setMessage(e.target.value)} placeholder="What would you like to discuss?" rows={5}/></label><button className="solid" type="submit">Prepare email ↗</button></form></section></div>
}

function Playground(){
  const box=useRef<HTMLDivElement>(null); const [positions,setPositions]=useState(chips.map((_,i)=>({x:8+(i*13)%64,y:12+(i*19)%65,r:(i%3-1)*3})));
  const drag=useRef<{i:number,dx:number,dy:number}|null>(null);
  const down=(i:number,e:React.PointerEvent<HTMLButtonElement>)=>{const rect=e.currentTarget.getBoundingClientRect();drag.current={i,dx:e.clientX-rect.left,dy:e.clientY-rect.top};e.currentTarget.setPointerCapture(e.pointerId)};
  const move=(e:React.PointerEvent<HTMLButtonElement>)=>{if(!drag.current||!box.current)return;const b=box.current.getBoundingClientRect();const el=e.currentTarget.getBoundingClientRect();const x=Math.max(0,Math.min(b.width-el.width,e.clientX-b.left-drag.current.dx));const y=Math.max(0,Math.min(b.height-el.height,e.clientY-b.top-drag.current.dy));setPositions(p=>p.map((v,i)=>i===drag.current?.i?{...v,x:x/b.width*100,y:y/b.height*100,r:0}:v))};
  const up=()=>{drag.current=null};
  return <div ref={box} className="playBox">{chips.map((chip,i)=><button key={chip} className="playChip" style={{left:`${positions[i].x}%`,top:`${positions[i].y}%`,transform:`rotate(${positions[i].r}deg)`}} onPointerDown={e=>down(i,e)} onPointerMove={move} onPointerUp={up} onPointerCancel={up}>{chip}</button>)}</div>
}

function DinoGame(){
  const [status,setStatus]=useState<'idle'|'playing'|'paused'|'over'>('idle');
  const [score,setScore]=useState(0); const [best,setBest]=useState(0);
  const [jumping,setJumping]=useState(false); const [ducking,setDucking]=useState(false);
  const [obstacle,setObstacle]=useState<'cactus'|'double'|'bird'|'rock'>('cactus');
  const gameRef=useRef<HTMLDivElement>(null); const dinoRef=useRef<HTMLDivElement>(null); const obstacleRef=useRef<HTMLDivElement>(null);
  const obstacles={cactus:'🌵',double:'🌵🌵',bird:'🐦',rock:'🪨'};
  const jump=()=>{if(status!=='playing'||jumping||ducking)return;setJumping(true);window.setTimeout(()=>setJumping(false),600)};
  const nextObstacle=()=>{const choices:(keyof typeof obstacles)[]=['cactus','double','bird','rock'];setObstacle(current=>{const available=choices.filter(item=>item!==current);return available[Math.floor(Math.random()*available.length)]})};
  const start=()=>{setScore(0);setJumping(false);setDucking(false);setObstacle('cactus');setStatus('playing');window.setTimeout(()=>gameRef.current?.focus(),0)};
  const togglePause=()=>setStatus(current=>current==='playing'?'paused':current==='paused'?'playing':current);
  useEffect(()=>{if(status!=='playing')return;const scoreTimer=window.setInterval(()=>setScore(v=>v+1),120);const collisionTimer=window.setInterval(()=>{const d=dinoRef.current?.getBoundingClientRect();const o=obstacleRef.current?.getBoundingClientRect();if(d&&o&&d.right-10>o.left&&d.left+10<o.right&&d.bottom-7>o.top&&d.top+8<o.bottom){setStatus('over');setBest(current=>Math.max(current,score))}},32);return()=>{clearInterval(scoreTimer);clearInterval(collisionTimer)}},[status,score]);
  useEffect(()=>{const down=(e:KeyboardEvent)=>{if(!['Space','ArrowUp','ArrowDown'].includes(e.code))return;const target=e.target as HTMLElement;if(target.matches('input,textarea,[contenteditable="true"]'))return;if(status==='playing'||status==='paused'){e.preventDefault();e.stopPropagation()}if(status!=='playing')return;if(e.code==='ArrowDown'){setDucking(true);return}jump()};const up=(e:KeyboardEvent)=>{if(e.code==='ArrowDown'){e.preventDefault();setDucking(false)}};window.addEventListener('keydown',down,{capture:true});window.addEventListener('keyup',up,{capture:true});return()=>{window.removeEventListener('keydown',down,{capture:true});window.removeEventListener('keyup',up,{capture:true})}},[status,jumping,ducking]);
  const speed=Math.max(1.18,2.35-score*.0015);
  return <div ref={gameRef} tabIndex={0} className={`dinoGame ${status==='playing'?'isPlaying':''} ${status==='paused'?'isPaused':''}`} onPointerDown={e=>{if((e.target as HTMLElement).closest('button'))return;jump()}}>
    <div className="dinoTop"><div><span className="offlineDot"/>No Wi‑Fi Dino</div><div className="gameTopActions"><div className="scoreBoard"><span>HI {String(best).padStart(4,'0')}</span><b>{String(score).padStart(4,'0')}</b></div>{(status==='playing'||status==='paused')&&<button className="pauseButton" onClick={togglePause} aria-label={status==='paused'?'Resume game':'Pause game'}>{status==='paused'?'▶':'Ⅱ'}</button>}</div></div>
    <div className="dinoStage" aria-label="Dinosaur runner game. Space or arrow up jumps. Arrow down ducks.">
      <div className="cloud cloudOne">· · ·</div><div className="cloud cloudTwo">· ·</div>
      <div ref={dinoRef} className={`dino ${jumping?'isJumping':''} ${ducking?'isDucking':''}`} aria-hidden="true"><span className="dinoSprite">🦖</span></div>
      <div ref={obstacleRef} className={`cactus obstacle-${obstacle}`} style={{animationDuration:`${speed}s`}} onAnimationIteration={nextObstacle} aria-hidden="true">{obstacles[obstacle]}</div>
      <div className="ground"/>
      {status!=='playing'&&status!=='paused'&&<div className="gameOverlay"><p>{status==='over'?'Connection lost again.':'A tiny offline break.'}</p><h3>{status==='over'?`Score ${score}`:'Run, jump, duck.'}</h3><button onClick={start}>{status==='over'?'Play again':'Play'}</button><small>Space / ↑ jump · ↓ duck</small></div>}
      {status==='paused'&&<div className="pauseOverlay"><span>Paused</span><button onClick={togglePause}>▶ Continue</button></div>}
      {(status==='playing'||status==='paused')&&<div className="gameControls"><button onPointerDown={jump} aria-label="Jump">↑<small>Jump</small></button><button onPointerDown={()=>setDucking(true)} onPointerUp={()=>setDucking(false)} onPointerCancel={()=>setDucking(false)} aria-label="Duck">↓<small>Duck</small></button></div>}
    </div>
  </div>
}

const hangmanWords=[
  {word:'ALGORITHM',hint:'A step-by-step way to solve a problem'},
  {word:'FIREBASE',hint:'A backend platform used in FamilyOS'},
  {word:'VARIABLE',hint:'A named place to store a value'},
  {word:'SWIFTUI',hint:'Apple framework used to build interfaces'},
  {word:'DATABASE',hint:'Organized storage for information'},
  {word:'FUNCTION',hint:'Reusable block of code'},
];
const hangmanArt=[`  ┌────\n  │\n  │\n  │\n──┴──`,`  ┌────\n  │   ○\n  │\n  │\n──┴──`,`  ┌────\n  │   ○\n  │   │\n  │\n──┴──`,`  ┌────\n  │   ○\n  │  ╱│\n  │\n──┴──`,`  ┌────\n  │   ○\n  │  ╱│╲\n  │\n──┴──`,`  ┌────\n  │   ○\n  │  ╱│╲\n  │  ╱\n──┴──`,`  ┌────\n  │   ○\n  │  ╱│╲\n  │  ╱ ╲\n──┴──`];

function HangmanGame(){
  const [wordIndex,setWordIndex]=useState(0); const [guessed,setGuessed]=useState<string[]>([]);
  const gameRef=useRef<HTMLDivElement>(null);
  const entry=hangmanWords[wordIndex]; const wrong=guessed.filter(letter=>!entry.word.includes(letter));
  const won=entry.word.split('').every(letter=>guessed.includes(letter)); const lost=wrong.length>=6; const finished=won||lost;
  const choose=(letter:string)=>{if(finished||guessed.includes(letter))return;setGuessed(current=>[...current,letter])};
  const next=()=>{setWordIndex(current=>(current+1)%hangmanWords.length);setGuessed([])};
  useEffect(()=>{const key=(e:KeyboardEvent)=>{if(!gameRef.current?.contains(document.activeElement))return;const letter=e.key.toUpperCase();if(/^[A-Z]$/.test(letter)){e.preventDefault();choose(letter)}};window.addEventListener('keydown',key);return()=>window.removeEventListener('keydown',key)},[guessed,finished]);
  return <div ref={gameRef} tabIndex={0} className="arcadePanel hangmanPanel" onPointerDown={()=>gameRef.current?.focus()}>
    <div className="miniStatus"><span>{wrong.length}/6 misses</span><button onClick={next}>New word ↻</button></div>
    <div className="hangmanBody">
      <section className="hangmanPuzzle"><pre aria-label={`${wrong.length} wrong guesses`}>{hangmanArt[wrong.length]}</pre><div className="hangmanCopy"><span className="hangmanCategory">COMPUTER SCIENCE</span><p>{entry.hint}</p><div className="hangmanWord" aria-label={finished?entry.word:'Hidden word'}>{entry.word.split('').map((letter,i)=><b key={`${letter}-${i}`}>{guessed.includes(letter)||lost?letter:'_'}</b>)}</div>{finished&&<div className={`hangmanResult ${won?'won':''}`}><strong>{won?'You got it!':'The word was '+entry.word}</strong><button onClick={next}>Next word →</button></div>}</div></section>
      <div className="hangmanKeyboard" aria-label="Letter keyboard">{'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(letter=><button key={letter} disabled={guessed.includes(letter)||finished} className={guessed.includes(letter)?(entry.word.includes(letter)?'correct':'wrong'):''} onClick={()=>choose(letter)}>{letter}</button>)}</div>
    </div>
  </div>
}

function PlaygroundHub(){
  const rail=useRef<HTMLDivElement>(null);const [active,setActive]=useState(0);
  const goTo=(index:number)=>{const el=rail.current;if(!el)return;el.scrollTo({left:el.clientWidth*index,behavior:'smooth'});setActive(index)};
  const onScroll=()=>{const el=rail.current;if(el)setActive(Math.round(el.scrollLeft/el.clientWidth))};
  return <div className="playgroundHub"><div className="playgroundTabs" role="tablist" aria-label="Playground views"><button className={active===0?'active':''} onClick={()=>goTo(0)}>Profile blocks</button><button className={active===1?'active':''} onClick={()=>goTo(1)}>Dino</button><button className={active===2?'active':''} onClick={()=>goTo(2)}>Hangman</button></div><div className="playRail" ref={rail} onScroll={onScroll}><div className="playSlide"><Playground/><button className="swipeHint" onClick={()=>goTo(1)}>Swipe left to play <span>→</span></button></div><div className="playSlide"><DinoGame/><button className="swipeHint back" onClick={()=>goTo(0)}><span>←</span> Blocks</button><button className="swipeHint nextGame" onClick={()=>goTo(2)}>Hangman <span>→</span></button></div><div className="playSlide"><div className="hangmanGame"><div className="hangmanTop"><div><span className="offlineDot"/>Code Hangman</div><span>Keyboard or tap</span></div><HangmanGame/></div><button className="swipeHint back hangmanBack" onClick={()=>goTo(1)}><span>←</span> Dino</button></div></div><div className="pageDots" aria-label={`Playground page ${active+1} of 3`}><i className={active===0?'active':''}/><i className={active===1?'active':''}/><i className={active===2?'active':''}/></div></div>
}

export default function Home(){const [messageOpen,setMessageOpen]=useState(false);return <main>
  <nav className="nav shell"><a className="brand" href="#home"><Eyes/>Celine de Graaf</a><div className="navLinks"><a href="#playground">Playground</a><a href="#projects">Projects</a><a href="#case-study">Case study</a><a href="#skills">Skills</a><a href="#about">About</a></div><div className="navActions"><a className="cvButton" href="/Celine_de_Graaf_CV_EN.pdf" target="_blank">CV EN ↗</a><a className="cvButton cvNlButton" href="/Celine_de_Graaf_CV_NL.pdf" target="_blank">NL</a><ThemeButton/></div></nav>
  <section id="home" className="hero shell"><div className="heroCopy"><p className="kicker">Computer Science student · Remote opportunities</p><h1>Building reliable software.<br/><em>Growing into AI/LLM engineering.</em></h1><p className="heroText">Bachelor Informatica student combining structured computer-science learning with hands-on software projects, testing, documentation and iterative development.</p><div className="heroActions"><a className="solid" href="#projects">Explore my work</a><button className="outline" onClick={()=>setMessageOpen(true)}>Message me</button><a className="outline" href="/Celine_de_Graaf_CV_EN.pdf" target="_blank">Open CV ↗</a></div></div><IOSWidgets openMessage={()=>setMessageOpen(true)}/></section>

  <section id="playground" className="band"><div className="shell"><div className="sectionIntro"><span>01</span><div><h2>Playground</h2><p>Drag the profile blocks, run with the no‑Wi‑Fi dinosaur or solve a quick code-themed word. Mouse, keyboard and touch friendly.</p></div></div><PlaygroundHub/></div></section>

  <section id="projects" className="section shell"><div className="sectionIntro"><span>02</span><div><h2>Projects</h2><p>Current work, coursework and learning projects—labelled by evidence status.</p></div></div><div className="projectGrid">{projects.map((p,i)=><article className={`projectCard ${i===0?'featured':''}`} key={p.title}><div className="projectNo">0{i+1}</div><p className="state">{p.state}</p><h3>{p.title}</h3><p>{p.desc}</p><div className="tags">{p.tags.map(t=><span key={t}>{t}</span>)}</div>{i===0&&<a className="caseLink" href="#case-study">Read the documented case study ↓</a>}</article>)}</div></section>

  <article id="case-study" className="caseStudy"><header className="caseHero shell"><div><p className="kicker">FamilyOS · Software/product case study</p><h2>Building a clearer family coordination experience across parent and child roles.</h2><p>In Progress · Not production-ready · Evidence updated from the current development record</p></div><dl><div><dt>Status</dt><dd>Active development</dd></div><div><dt>User roles</dt><dd>Parent + child</dd></div><div><dt>Evidence</dt><dd>Builds, tests and implemented flows</dd></div></dl></header>
    <section className="caseSection shell"><div className="caseLabel">Context</div><div className="caseBody"><h3>One family product, two very different experiences.</h3><p>FamilyOS explores how parents and children can coordinate routines, allowance, health habits, communication and safety without giving both roles the same permissions or interface responsibilities.</p><div className="triad"><article><small>Problem</small><p>Family information is spread across separate tools, while parent control and child independence can conflict.</p></article><article><small>Approach</small><p>Design role-aware flows and validate them incrementally through implementation, builds and tests.</p></article><article><small>Current result</small><p>A working development base with key parent/child flows; substantial synchronisation and device validation remain.</p></article></div></div></section>
    <section className="caseSection shell"><div className="caseLabel">Scope</div><div className="caseBody"><h3>What is demonstrably present</h3><ul className="caseList"><li>Swift/SwiftUI parent and child flows</li><li>Google login visible in the parent flow</li><li>Account and child linking with a temporary six-digit code</li><li>Administrative allowance history and savings goals—no real money transfers</li><li>Health and routine tracking with configurable parent goals</li><li>Family alarms, acknowledgements and safety check-ins</li><li>Linked-device battery and last-seen information</li><li>Role-based restrictions, Firebase backend work, successful builds and automated tests</li></ul></div></section>
    <section className="caseSection shell"><div className="caseLabel">Technical approach</div><div className="caseBody"><h3>Implementation as a learning and validation loop</h3><div className="processGrid">{[['1','Frame','Define the parent/child problem and safest useful scope.'],['2','Build','Implement one bounded flow in SwiftUI and backend services.'],['3','Validate','Run builds, automated tests and simulator checks.'],['4','Document','Record what works, what is partial and what remains planned.'],['5','Improve','Refine architecture and continue broader real-time synchronisation.']].map(([n,t,d])=><article key={n}><b>{n}</b><h4>{t}</h4><p>{d}</p></article>)}</div></div></section>
    <section className="caseSection shell"><div className="caseLabel">Evidence & limits</div><div className="caseBody"><h3>Important information that should not be hidden.</h3><div className="evidenceGrid"><article><small>Evidence currently recorded</small><p>Backend deployment, successful builds, automated tests, simulator testing, role-aware flows, account/device linking and iterative product work.</p></article><article><small>Not yet claimed</small><p>Production readiness, public launch, complete real-time synchronisation, real payments, end-to-end APNs testing, Critical Alerts or complete geofencing.</p></article><article><small>Still in development</small><p>Multiple caregivers/children, fuller device and session management, co-parenting, StoreKit and broader safety/communication capabilities.</p></article><article><small>Next proof</small><p>A redacted public repository or reviewed code sample, architecture documentation, reproducible test output and labelled product screenshots.</p></article></div></div></section>
    <section className="caseConclusion shell"><p className="kicker">Current conclusion</p><blockquote>Strong portfolio evidence comes from showing the working decisions and the unfinished boundaries—not from calling an active project production-ready.</blockquote><a href="#contact">Discuss this project ↓</a></section>
  </article>

  <section id="skills" className="band"><div className="shell"><div className="sectionIntro"><span>03</span><div><h2>Skills & Learning</h2><p>Organized by depth and current focus, without turning learning goals into expertise claims.</p></div></div>{skillGroups.map(g=><div className="skillGroup" key={g.title}><div className="skillHeading"><h3>{g.title}</h3><p>{g.note}</p></div><div className="skillGrid">{g.items.map(([name,desc])=><article key={name}><h4>{name}</h4><p>{desc}</p></article>)}</div></div>)}</div></section>

  <section id="about" className="section shell"><div className="sectionIntro"><span>04</span><div><h2>About</h2></div></div><div className="aboutGrid"><div className="aboutCopy"><p>I’m Celine, a Bachelor Informatica student at Open Universiteit. I enjoy building with code and understanding how software behaves—from interfaces and data flows to systems-level fundamentals.</p><p>My direction is software development first, followed by increasingly applied AI/LLM engineering. I learn by building, testing, documenting and improving rather than collecting titles before the evidence exists.</p></div><div className="aboutMeta"><article><small>Current focus</small><p>Software foundations, mobile development and AI/LLM application skills.</p></article><article><small>Learning style</small><p>Project-based, hands-on and supported by theory.</p></article><article><small>What excites me</small><p>Intentional systems that solve real problems or create new possibilities.</p></article></div></div></section>

  <section id="education" className="band"><div className="shell"><div className="sectionIntro"><span>05</span><div><h2>Education & Background</h2></div></div><div className="educationList">{education.map(([title,meta,desc])=><article key={title}><div><h3>{title}</h3><p className="eduMeta">{meta}</p></div><p>{desc}</p></article>)}</div><div className="certs"><h3>Certificates & achievements</h3><span>IELTS Academic · B2</span><span>Staatsexamen NT2 · Programma II</span><span>NHA Apps Maken & Apps Programmeren · Grade 10</span></div></div></section>

  <section id="contact" className="contact shell"><p className="kicker">Get in touch</p><h2>Open to remote entry-level opportunities, collaboration and conversations about code.</h2><div><button className="solid" onClick={()=>setMessageOpen(true)}>Message me</button><a className="outline" href="mailto:celinedegraaf.tech@gmail.com">Email</a><a className="outline" href="/Celine_de_Graaf_CV_EN.pdf" target="_blank">Open CV — English ↗</a><a className="outline" href="/Celine_de_Graaf_CV_NL.pdf" target="_blank">Open CV — Nederlands ↗</a><a className="outline" href="/Celine_de_Graaf_CV_EN.pdf" download>Download EN ↓</a><a className="outline" href="/Celine_de_Graaf_CV_NL.pdf" download>Download NL ↓</a></div></section>
  <footer className="footer shell"><span>Designed and built by Celine de Graaf.</span><span>Learning · building · improving</span></footer>
  <nav className="mobileTabBar" aria-label="Mobile navigation"><a href="#home"><span>⌂</span>Home</a><a href="#projects"><span>▦</span>Work</a><a href="#case-study"><span>◫</span>Case</a><a href="#contact"><span>✉</span>Contact</a></nav>
  {messageOpen&&<MessageModal close={()=>setMessageOpen(false)}/>} 
</main>}
