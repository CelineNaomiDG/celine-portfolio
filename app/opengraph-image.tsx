import { ImageResponse } from 'next/og';
export const alt = 'Celine de Graaf — Software, websites & digital design';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export default function Image(){return new ImageResponse(<div style={{display:'flex',flexDirection:'column',justifyContent:'space-between',padding:70,width:'100%',height:'100%',background:'#151515',color:'#f2eee6'}}><div style={{fontSize:28}}>Celine de Graaf</div><div style={{fontSize:86,letterSpacing:-4,display:'flex',flexDirection:'column'}}><span>Thoughtful interfaces.</span><span>Ideas made tangible.</span></div><div style={{fontSize:26}}>Software · Websites · Digital Design</div></div>,size)}
