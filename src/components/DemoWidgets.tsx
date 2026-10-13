import { useMemo, useState } from 'react';
import { CalendarDays, Check, ChevronLeft, ChevronRight, Copy, Gauge, LayoutGrid, MousePointer2, Smartphone, Sparkles, Workflow } from 'lucide-react';
import { services } from '../data/services';

type Task = { id: number; label: string; done: boolean; category: 'Inbox' | 'Planning' | 'Admin' };

export function WebsitePreview() {
  const [device, setDevice] = useState<'desktop' | 'mobile'>('desktop');
  const [active, setActive] = useState('Home');
  return (
    <div className="demo-panel">
      <div className="demo-panel-heading"><div><span className="demo-kicker">LIVE FRONTEND DEMO</span><h3>Preview a responsive experience</h3></div><div className="device-switch"><button onClick={() => setDevice('desktop')} className={device === 'desktop' ? 'device-active' : ''} aria-label="Desktop preview"><LayoutGrid size={16} /></button><button onClick={() => setDevice('mobile')} className={device === 'mobile' ? 'device-active' : ''} aria-label="Mobile preview"><Smartphone size={16} /></button></div></div>
      <div className={`website-demo-frame ${device === 'mobile' ? 'website-demo-mobile' : ''}`}>
        <div className="website-demo-top"><span /><span /><span /><small>yourbusiness.example</small></div>
        <div className="website-demo-nav"><b>YOUR BRAND</b><div>{['Home', 'Services', 'About'].map((item) => <button key={item} className={active === item ? 'demo-nav-active' : ''} onClick={() => setActive(item)}>{item}</button>)}</div></div>
        <div className="website-demo-hero"><div><small>{active.toUpperCase()} / YOUR NEXT STEP</small><b>{active === 'Home' ? 'Make your next move.' : active === 'Services' ? 'Solutions with a purpose.' : 'Good work starts with people.'}</b><p>A clear, modern experience designed around your customers.</p><button onClick={() => setActive('Services')}>Explore the idea ↗</button></div><div className="website-demo-orb"><span>G</span></div></div>
        <div className="website-demo-bottom"><span /><span /><span /></div>
      </div>
      <p className="demo-disclaimer">Interactive layout sample. This is not a deployed customer website.</p>
    </div>
  );
}

export function ContentCalendarDemo() {
  const [week, setWeek] = useState(1);
  const [filter, setFilter] = useState<'All' | 'Education' | 'Promotion' | 'Conversation'>('All');
  const rows = [
    { day: 'MON', type: 'Education', title: 'One mistake your audience can avoid', channel: 'LinkedIn' },
    { day: 'TUE', type: 'Conversation', title: 'Ask a question worth answering', channel: 'Instagram' },
    { day: 'WED', type: 'Education', title: 'A three-step practical tip', channel: 'Facebook' },
    { day: 'THU', type: 'Promotion', title: 'Show how your service solves a problem', channel: 'LinkedIn' },
    { day: 'FRI', type: 'Conversation', title: 'Invite people to share their experience', channel: 'Instagram' },
  ];
  const visibleRows = rows.filter((row) => filter === 'All' || row.type === filter);
  return (
    <div className="demo-panel">
      <div className="demo-panel-heading"><div><span className="demo-kicker">CONTENT PLANNING DEMO</span><h3>A sample five-day content sprint</h3></div><div className="week-control"><button aria-label="Previous content week" onClick={() => setWeek(Math.max(1, week - 1))}><ChevronLeft size={16} /></button><span>Week {week}</span><button aria-label="Next content week" onClick={() => setWeek(week + 1)}><ChevronRight size={16} /></button></div></div>
      <div className="demo-filter-row">{(['All', 'Education', 'Promotion', 'Conversation'] as const).map((item) => <button key={item} onClick={() => setFilter(item)} className={filter === item ? 'demo-filter-active' : ''}>{item}</button>)}</div>
      <div className="content-calendar-rows">{visibleRows.map((row) => <div className="calendar-row" key={row.day}><span className="calendar-day">{row.day}</span><div className={`content-type content-type-${row.type.toLowerCase()}`}>{row.type}</div><div className="calendar-row-copy"><b>{row.title}</b><small>{row.channel}</small></div><CalendarDays size={16} /></div>)}</div>
      <p className="demo-disclaimer">Illustrative topics only. A real content plan should be tailored to your brand and audience.</p>
    </div>
  );
}

export function BrandPaletteDemo() {
  const [palette, setPalette] = useState(0);
  const palettes = [
    { name: 'Growth & clarity', colors: ['#092B1B', '#5FAE25', '#A5DF68', '#F7FAF7'], fonts: 'Manrope + DM Sans' },
    { name: 'Quiet confidence', colors: ['#1D3329', '#6D8A72', '#D6E0D0', '#FBF8F1'], fonts: 'DM Sans + Georgia' },
    { name: 'Fresh momentum', colors: ['#15352D', '#7CB342', '#D3EC9A', '#F8FBF3'], fonts: 'Manrope + DM Sans' },
  ];
  return <div className="demo-panel"><div className="demo-panel-heading"><div><span className="demo-kicker">BRAND SYSTEM PLAYGROUND</span><h3>Explore a visual direction</h3></div><Sparkles className="demo-heading-icon" size={20} /></div><div className="palette-selectors">{palettes.map((item, index) => <button className={palette === index ? 'palette-selector-active' : ''} key={item.name} onClick={() => setPalette(index)}>{item.name}</button>)}</div><div className="palette-large-preview" style={{ background: palettes[palette].colors[3] }}><div><span className="palette-mark" style={{ background: palettes[palette].colors[0], color: palettes[palette].colors[2] }}>G</span><small style={{ color: palettes[palette].colors[1] }}>BRAND DIRECTION / 0{palette + 1}</small><h4 style={{ color: palettes[palette].colors[0] }}>Make it<br /><em style={{ color: palettes[palette].colors[1] }}>memorable.</em></h4><p style={{ color: palettes[palette].colors[0] }}>A cohesive identity creates familiarity, trust and recognition.</p></div><div className="palette-big-orb" style={{ background: `linear-gradient(145deg, ${palettes[palette].colors[1]}, ${palettes[palette].colors[0]})` }} /></div><div className="palette-swatches">{palettes[palette].colors.map((color) => <button key={color} onClick={() => void navigator.clipboard?.writeText(color)} title={`Copy ${color}`} style={{ background: color }}><span>{color}</span><Copy size={12} /></button>)}</div><p className="demo-disclaimer">Click a colour swatch to copy its HEX value where clipboard access is supported.</p></div>;
}

export function TaskOrganiserDemo() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, label: 'Reply to new client enquiries', category: 'Inbox', done: true },
    { id: 2, label: 'Confirm next week’s appointments', category: 'Planning', done: false },
    { id: 3, label: 'Organise shared project documents', category: 'Admin', done: false },
  ]);
  const [newTask, setNewTask] = useState('');
  const [filter, setFilter] = useState<'All' | 'Open' | 'Done'>('All');
  const completed = tasks.filter((task) => task.done).length;
  const visible = tasks.filter((task) => filter === 'All' || (filter === 'Done' ? task.done : !task.done));
  const addTask = () => {
    const label = newTask.trim();
    if (!label) return;
    setTasks((current) => [...current, { id: Date.now(), label, category: 'Admin', done: false }]);
    setNewTask('');
  };
  return <div className="demo-panel"><div className="demo-panel-heading"><div><span className="demo-kicker">TASK-BLAST DEMO</span><h3>Make the workload visible</h3></div><div className="task-progress"><b>{completed}/{tasks.length}</b><small>complete</small></div></div><div className="task-progress-track"><span style={{ width: `${tasks.length ? (completed / tasks.length) * 100 : 0}%` }} /></div><div className="task-add-row"><input value={newTask} onChange={(event) => setNewTask(event.target.value)} onKeyDown={(event) => { if (event.key === 'Enter') addTask(); }} placeholder="Add a task to organise…" aria-label="New task" /><button onClick={addTask}>Add task <Workflow size={14} /></button></div><div className="demo-filter-row">{(['All', 'Open', 'Done'] as const).map((item) => <button className={filter === item ? 'demo-filter-active' : ''} key={item} onClick={() => setFilter(item)}>{item}</button>)}</div><div className="task-list">{visible.map((task) => <label className={`task-list-row ${task.done ? 'task-list-row-done' : ''}`} key={task.id}><input type="checkbox" checked={task.done} onChange={() => setTasks((current) => current.map((item) => item.id === task.id ? { ...item, done: !item.done } : item))} /><span><b>{task.label}</b><small>{task.category}</small></span><Check size={15} /></label>)}{visible.length === 0 && <div className="empty-state">Nothing in this view yet.</div>}</div><p className="demo-disclaimer">Tasks are stored only in this page’s current state and are not sent to a VA or saved to a database.</p></div>;
}

export function ShopifyPreviewDemo() {
  const [mobile, setMobile] = useState(false);
  const [selected, setSelected] = useState('Everyday Tote');
  const [cart, setCart] = useState(0);
  const products = [{ name: 'Everyday Tote', price: '₦24,000', color: '#d4e4c7' }, { name: 'Studio Bottle', price: '₦12,500', color: '#b2c8ae' }, { name: 'Daily Journal', price: '₦8,500', color: '#e3d9bd' }];
  const item = products.find((product) => product.name === selected) ?? products[0];
  return <div className="demo-panel"><div className="demo-panel-heading"><div><span className="demo-kicker">SHOPIFY STORE CONCEPT</span><h3>Preview a cleaner store journey</h3></div><div className="device-switch"><button className={!mobile ? 'device-active' : ''} onClick={() => setMobile(false)} aria-label="Desktop storefront"><LayoutGrid size={16} /></button><button className={mobile ? 'device-active' : ''} onClick={() => setMobile(true)} aria-label="Mobile storefront"><Smartphone size={16} /></button></div></div><div className={`shop-preview ${mobile ? 'shop-preview-mobile' : ''}`}><div className="shop-nav"><b>FIELD / FORM</b><span>New in</span><span>Essentials</span><span className="shop-cart">Bag ({cart})</span></div><div className="shop-hero"><div className="shop-product-art" style={{ background: item.color }}><div className="product-shape">{selected === 'Everyday Tote' ? 'T' : selected === 'Studio Bottle' ? 'B' : 'N'}</div></div><div className="shop-product-details"><small>MADE FOR EVERYDAY</small><h4>{item.name}</h4><b>{item.price}</b><p>Useful essentials, thoughtful details, and a simpler everyday routine.</p><div className="shop-product-select">{products.map((product) => <button className={selected === product.name ? 'shop-product-selected' : ''} key={product.name} onClick={() => setSelected(product.name)}>{product.name}</button>)}</div><button className="shop-add-button" onClick={() => setCart((count) => count + 1)}>Add to bag <span>↗</span></button></div></div></div><p className="demo-disclaimer">Illustrative store only. This does not connect to a live Shopify store or process payments.</p></div>;
}

export function ServiceIconSummary({ slug }: { slug: string }) {
  const target = services.find((service) => service.slug === slug);
  const Icon = target?.icon ?? Gauge;
  const label = useMemo(() => target?.title ?? 'Growthpro service', [target]);
  return <div className="service-icon-summary"><span><Icon size={22} /></span><div><small>RECOMMENDED SERVICE</small><b>{label}</b></div><MousePointer2 size={15} /></div>;
}

export function MiniChecklist({ items }: { items: string[] }) {
  const [checked, setChecked] = useState<string[]>([]);
  return <div className="mini-checklist">{items.map((item) => <label key={item}><input type="checkbox" checked={checked.includes(item)} onChange={() => setChecked((current) => current.includes(item) ? current.filter((value) => value !== item) : [...current, item])} /><span>{item}</span>{checked.includes(item) && <Check size={14} />}</label>)}</div>;
}
