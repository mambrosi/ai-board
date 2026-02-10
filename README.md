# Tu Directorio de Asesores AI

> Cómo tomar mejores decisiones en tu empresa usando AI como pensamiento asistido.

Workshop diseñado para ejecutivos y dueños de empresas. No necesitás experiencia técnica.

## ¿Qué es esto?

Un board de 5 asesores virtuales que analizan tus decisiones de negocio desde perspectivas complementarias antes de que te comprometas. Pensalo como un directorio privado que trabaja 24/7 para vos.

| Director | Foco | Pregunta clave |
|----------|------|----------------|
| 💰 Financiero | Cash flow, ROI, márgenes | ¿Cuánto cuesta hacer esto vs. no hacerlo? |
| 📈 Comercial | Revenue, clientes, mercado | ¿Esto nos acerca a más ingreso? |
| ⚙️ Operaciones | Gente, procesos, plazos | ¿Tenemos capacidad real para esto? |
| 🔴 Abogado del Diablo | Riesgos, supuestos falsos | ¿Qué estás asumiendo sin verificar? |
| 🧭 Mentor Estratégico | Motivación, alineación personal | ¿Esto te acerca a la vida que querés? |

## Setup rápido (5 minutos)

### Opción A: Claude (recomendado)

1. Ir a [claude.ai](https://claude.ai) → Projects → New Project
2. Nombre: "Mi Directorio de Asesores"
3. Copiar el contenido de [`prompts/board-directivo.md`](prompts/board-directivo.md) en las instrucciones del proyecto
4. Subir tus documentos de contexto (ver [qué documentos subir](#qué-documentos-subir))

### Opción B: ChatGPT

1. Ir a [chatgpt.com](https://chatgpt.com) → Explorar GPTs → Crear
2. O usar Configuración → Personalización → Instrucciones personalizadas
3. Copiar el mismo prompt de [`prompts/board-directivo.md`](prompts/board-directivo.md)
4. Adjuntar documentos directamente en el chat

## Qué documentos subir

El board es más útil cuanto más contexto tiene de tu empresa:

| Documento | Prioridad | Dónde lo conseguís |
|-----------|-----------|-------------------|
| Presentación de empresa | ⭐ Alta | Tu presentación de Vistage (ya la tenés) |
| Temas Clave / worksheets | ⭐ Alta | Tus worksheets de reuniones de grupo |
| Estados financieros | Media | Tu contador o ERP |
| Plan estratégico / OKRs | Media | Tu último planning |
| Organigrama | Baja | RRHH o tu propia cabeza |

> **Tip:** No necesitás todos. Con tu presentación de empresa ya tenés suficiente para arrancar.

Si no tenés tu presentación de empresa a mano, podés completar el template de [`templates/contexto-empresa.md`](templates/contexto-empresa.md).

## Cómo usarlo

Ver el [cheat sheet](docs/cheat-sheet.md) para referencia rápida.

### Comandos principales

- **Plantear un tema** → Los 5 directores opinan automáticamente
- **"Quiero hablar solo con [director]"** → Profundizás con uno
- **"Necesito tomar una decisión"** → Los 5 votan a favor/en contra
- **"Quiero explorar opciones"** → Cada uno propone un camino diferente
- **Subir un Tema Clave** → Lo analizan como sesión de directorio

### Ejemplos

- [Decisión de inversión](examples/ejemplo-decision-inversion.md)
- [Problema de personas](examples/ejemplo-problema-personas.md)
- [Análisis de Tema Clave](examples/ejemplo-tema-clave.md)

## Estructura del repo

```
├── prompts/
│   └── board-directivo.md       # El prompt principal (copiar a Claude/ChatGPT)
├── templates/
│   ├── contexto-empresa.md      # Template para completar datos de tu empresa
│   └── tema-clave.md            # Template de Tema Clave para subir al board
├── docs/
│   └── cheat-sheet.md           # Referencia rápida de una página
├── examples/
│   ├── ejemplo-decision-inversion.md
│   ├── ejemplo-problema-personas.md
│   └── ejemplo-tema-clave.md
└── README.md
```

## Licencia

Uso libre. Si te sirve, compartilo.
