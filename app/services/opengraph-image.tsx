import { ImageResponse } from 'next/og';
export const alt = 'Celine de Graaf — Websites, Apps & Digital Design';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export default function Image() {return new ImageResponse(<div style={{display:'flex',flexDirection:'column',justifyContent:'space-between',width:'100%',height:'100%',padding:70,background:'#efede7',color:'#24231f'}}><div style={{fontSize:28}}>Celine de Graaf / Digital Design</div><div style={{display:'flex',flexDirection:'column',fontSize:80,letterSpacing:-4}}><span>Een helder verhaal.</span><span>Een sterke digitale plek.</span></div><div style={{fontSize:24}}>Websites · Apps · Design</div></div>,size)}
