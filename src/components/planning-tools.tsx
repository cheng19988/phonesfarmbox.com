"use client";

import { useMemo, useState } from "react";

export function CapacityEstimator() {
  const [devices, setDevices] = useState(40);
  const [headroom, setHeadroom] = useState(15);
  const [slotsPerBox, setSlotsPerBox] = useState(20);

  const result = useMemo(() => {
    const perBox = Math.max(1, slotsPerBox);
    const adjusted = Math.ceil(devices * (1 + headroom / 100));
    const boxes = Math.ceil(adjusted / perBox);
    return { boxes, slots: boxes * perBox, adjusted };
  }, [devices, headroom, slotsPerBox]);

  return (
    <div className="space-y-4">
      <label className="block text-sm text-slate-600">
        Target device count
        <input type="number" min={1} max={500} value={devices} onChange={(e) => setDevices(Number(e.target.value))} className="mt-1 input-field" />
      </label>
      <label className="block text-sm text-slate-600">
        Thermal / growth headroom (%)
        <input type="range" min={0} max={40} value={headroom} onChange={(e) => setHeadroom(Number(e.target.value))} className="w-full mt-2" />
        <span className="text-slate-900 font-medium">{headroom}%</span>
      </label>
      <label className="block text-sm text-slate-600">
        Assumed slots per chassis (planning — confirm at quote)
        <input type="number" min={1} max={100} value={slotsPerBox} onChange={(e) => setSlotsPerBox(Number(e.target.value))} className="mt-1 input-field" />
      </label>
      <div className="card p-4 border-orange-200 bg-orange-50/40">
        <p className="text-slate-900 font-medium">Estimated chassis units: <span className="text-orange-700">{result.boxes}</span></p>
        <p className="text-sm text-slate-600 mt-2">Total slots (planning): {result.slots} — targeting {result.adjusted} devices with headroom</p>
        <p className="text-xs text-slate-500 mt-2">Confirm final layout with sales — mixed iPhone/Android may need separate chassis.</p>
      </div>
    </div>
  );
}

export function PowerEstimator() {
  const [nodes, setNodes] = useState(20);
  const [wattsPerNode, setWattsPerNode] = useState(8);

  const total = useMemo(() => nodes * wattsPerNode * 1.2, [nodes, wattsPerNode]);

  return (
    <div className="space-y-4">
      <label className="block text-sm text-slate-600">
        Number of nodes
        <input type="number" min={1} max={200} value={nodes} onChange={(e) => setNodes(Number(e.target.value))} className="mt-1 input-field" />
      </label>
      <label className="block text-sm text-slate-600">
        Estimated draw per node (W)
        <input type="number" min={3} max={20} value={wattsPerNode} onChange={(e) => setWattsPerNode(Number(e.target.value))} className="mt-1 input-field" />
      </label>
      <div className="card p-4">
        <p className="text-slate-900">Suggested PSU budget: <span className="text-orange-700">{Math.ceil(total)} W</span> (includes ~20% margin)</p>
        <p className="text-xs text-slate-500 mt-2">Actual draw depends on phone model and charging profile — confirm before quote.</p>
      </div>
    </div>
  );
}

export function UsbPortCalculator() {
  const [nodes, setNodes] = useState(20);
  const [pcPorts, setPcPorts] = useState(1);

  const hubs = useMemo(() => Math.ceil(nodes / 16), [nodes]);

  return (
    <div className="space-y-4">
      <label className="block text-sm text-slate-600">
        Devices to connect
        <input type="number" min={1} max={200} value={nodes} onChange={(e) => setNodes(Number(e.target.value))} className="mt-1 input-field" />
      </label>
      <label className="block text-sm text-slate-600">
        Control PCs
        <input type="number" min={1} max={10} value={pcPorts} onChange={(e) => setPcPorts(Number(e.target.value))} className="mt-1 input-field" />
      </label>
      <div className="card p-4">
        <p className="text-slate-900">Plan for ~<span className="text-orange-700">{hubs}</span> industrial hub tier(s) (port count confirmed on datasheet)</p>
        <p className="text-sm text-slate-600 mt-2">{pcPorts} PC USB uplink(s) — use powered hubs; confirm cable length and EMI with sales.</p>
      </div>
    </div>
  );
}

export function BulkQuoteChecklist() {
  const items = [
    "Destination country & preferred shipping (air / sea)",
    "Android / iPhone / mixed — target models if known",
    "Total device count & timeline",
    "Need SIM, camera, or headless only?",
    "Network: proxy per device, router, or LAN-only?",
    "Existing control software or need setup service?",
    "Sample first or bulk only?",
  ];
  const [checked, setChecked] = useState<boolean[]>(() => items.map(() => false));

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <label key={item} className="flex gap-3 items-start card p-3 cursor-pointer">
          <input type="checkbox" checked={checked[i]} onChange={() => setChecked((c) => c.map((v, j) => (j === i ? !v : v)))} className="mt-1" />
          <span className="text-sm text-slate-300">{item}</span>
        </label>
      ))}
      <p className="text-sm text-slate-500">
        {checked.filter(Boolean).length}/{items.length} ready — copy notes into the{" "}
        <a href="/contact" className="text-amber-400 hover:underline">quote form</a>.
      </p>
    </div>
  );
}
