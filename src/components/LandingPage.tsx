"use client";

import {
  MessageCircle,
  CheckCircle2,
  GraduationCap,
  Users,
  Award,
  Sparkles,
  Clock,
  Globe2,
  Building2,
  Mic,
  RotateCw,
  Star,
  MapPin,
  Phone,
  ChevronDown,
} from "lucide-react";

import heroImg from "@/assets/hero-classroom.jpg";
import schoolImg from "@/assets/school-space.jpg";
import groupImg from "@/assets/group-class.jpg";
import teacherImg from "@/assets/teacher.jpg";
import egLogo from "@/assets/eg-logo.png";

import { useEffect, useRef, useState } from "react";

const GOOGLE_SHEETS_API_URL =
  "https://script.google.com/macros/s/AKfycbxUoeXRWbH4BhDmJ5p4gIlCWKD5hkeSmJ9M9-xW6hXiTp3X3Zyx_lPxmhLLbJsyaV2p/exec";

// ✅ fallback seguro (corrigido)
const WHATSAPP_NUMBER =
  (import.meta as any)?.env?.VITE_WHATSAPP_NUMBER || "5519999999999";

function AgendamentoSection() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [objetivo, setObjetivo] = useState("");
  const [nivel, setNivel] = useState("");
  const [data, setData] = useState("");
  const [horario, setHorario] = useState("");
  const [horariosReservados, setHorariosReservados] = useState<string[]>([]);
  const [carregando, setCarregando] = useState(false);
  const [agora, setAgora] = useState(new Date());

  const inputDataRef = useRef<HTMLInputElement>(null);

  const hoje = new Date();
  const dataMinima = hoje.toISOString().split("T")[0];

  const getDiaSemana = (dataSelecionada: string) => {
    if (!dataSelecionada) return null;
    return new Date(`${dataSelecionada}T00:00:00`).getDay();
  };

  const diaSemana = getDiaSemana(data);

  const horarios =
    diaSemana === 6
      ? ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00"]
      : diaSemana !== null && diaSemana >= 1 && diaSemana <= 5
      ? [
          "10:00","11:00","12:00","13:00","14:00","15:00",
          "16:00","17:00","18:00","19:00","20:00",
        ]
      : [];

  const horarioId = `${data}-${horario}`;

  const horarioPassou = horario
    ? new Date(`${data}T${horario}:00`) <= agora
    : false;

  const podeEnviar =
    nome &&
    email &&
    objetivo &&
    nivel &&
    data &&
    horario &&
    diaSemana !== 0 &&
    !horariosReservados.includes(horarioId) &&
    !horarioPassou &&
    !carregando;

  const dataFormatada = data
    ? new Date(`${data}T00:00:00`).toLocaleDateString("pt-BR")
    : "";

  // ================================
  // CARREGAR HORÁRIOS
  // ================================
  const carregarHorariosReservados = async () => {
    try {
      const res = await fetch(`${GOOGLE_SHEETS_API_URL}?action=listar`);
      const json = await res.json();

      if (!json.ok) return;

      const ocupados = json.agendamentos
        .map((i: any) => i.dataHora)
        .filter(Boolean);

      setHorariosReservados(ocupados);
    } catch (e) {
      console.error(e);
    }
  };

  // ================================
  // ENVIAR
  // ================================
  const enviar = async () => {
    if (!podeEnviar) return;

    setCarregando(true);

    try {
      const res = await fetch(GOOGLE_SHEETS_API_URL, {
        method: "POST",
        body: JSON.stringify({
          nome,
          email,
          objetivo,
          nivel,
          data,
          horario,
          origem: "LP Inglês",
        }),
      });

      const json = await res.json();

      if (!json.ok) {
        alert("Horário indisponível");
        return;
      }

      const msg = `
Olá! Quero agendar aula.

Nome: ${nome}
Email: ${email}
Objetivo: ${objetivo}
Nível: ${nivel}
Data: ${dataFormatada}
Horário: ${horario}
`;

      window.open(
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`,
        "_blank"
      );
    } catch {
      alert("Erro ao enviar");
    } finally {
      setCarregando(false);
    }
  };

  useEffect(() => {
    carregarHorariosReservados();
  }, []);

  useEffect(() => {
    const i = setInterval(() => setAgora(new Date()), 60000);
    return () => clearInterval(i);
  }, []);

  const horarioBloqueado = (h: string) => {
    const id = `${data}-${h}`;
    return (
      horariosReservados.includes(id) ||
      new Date(`${data}T${h}:00`) <= agora
    );
  };

  return (
    <section id="agendamento" className="py-20">
      <div className="max-w-6xl mx-auto px-5 grid lg:grid-cols-2 gap-8">
        
        {/* FORM */}
        <div className="bg-white p-6 rounded-3xl shadow">
          <input
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="input"
          />

          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input mt-3"
          />

          <select onChange={(e) => setObjetivo(e.target.value)} className="input mt-3">
            <option value="">Objetivo</option>
            <option>Viajar</option>
            <option>Trabalho</option>
          </select>

          <select onChange={(e) => setNivel(e.target.value)} className="input mt-3">
            <option value="">Nível</option>
            <option>Básico</option>
            <option>Intermediário</option>
          </select>

          {/* DATA */}
          <input
            ref={inputDataRef}
            type="date"
            min={dataMinima}
            value={data}
            onChange={(e) => {
              setData(e.target.value);
              setHorario("");
            }}
            className="input mt-3"
          />
        </div>

        {/* HORÁRIOS */}
        <div className="bg-white p-6 rounded-3xl shadow">
          <div className="grid grid-cols-3 gap-3">
            {horarios.map((h) => {
              const bloqueado = horarioBloqueado(h);

              return (
                <button
                  key={h}
                  disabled={bloqueado}
                  onClick={() => setHorario(h)}
                  className={`p-3 rounded-xl ${
                    bloqueado ? "bg-gray-200" : "bg-blue-500 text-white"
                  }`}
                >
                  {h}
                </button>
              );
            })}
          </div>

          <button
            onClick={enviar}
            disabled={!podeEnviar}
            className="mt-6 w-full bg-green-500 text-white p-4 rounded-full"
          >
            {carregando ? "Enviando..." : "Enviar WhatsApp"}
          </button>
        </div>
      </div>
    </section>
  );
}

export default function LandingPage() {
  return (
    <div>
      <AgendamentoSection />
    </div>
  );
}