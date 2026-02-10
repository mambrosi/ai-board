# Tu Directorio de Asesores AI

Un board de asesores virtuales que te ayuda a tomar mejores decisiones de negocio usando AI (Claude o ChatGPT).

Pensado para ejecutivos y dueños de empresa que quieren stress-testear sus decisiones antes de comprometerse.

## Qué es

Un proyecto pre-configurado que simula un directorio de 5 asesores expertos, cada uno con una perspectiva diferente:

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
3. Copiar el contenido de [`prompts/board-completo.md`](prompts/board-completo.md) en las instrucciones del proyecto
4. Completar la sección "Quién soy" con tu información, o subir tu presentación de empresa
5. Listo — empezá a plantear decisiones

### Opción B: ChatGPT

1. Ir a [chatgpt.com](https://chatgpt.com) → Explorar GPTs → Crear
2. Pegar el contenido de [`prompts/board-completo.md`](prompts/board-completo.md) en las instrucciones
3. Adjuntar documentos de contexto directamente en el chat

## Qué subir como contexto

Cuanto más sepa tu board sobre tu empresa, mejores las respuestas:

- **Presentación de empresa** (si tenés una de Vistage u otro grupo, es perfecta)
- **Temas clave / problemas actuales** (ver formato en [`examples/`](examples/))
- Estados financieros, plan estratégico, organigrama — todo suma

## Cómo usarlo

Ver la [guía de uso](docs/guia-de-uso.md) o la [referencia rápida](docs/cheat-sheet.md).

## Estructura del repo

```
├── prompts/
│   └── board-completo.md        # El prompt principal (copiar y pegar)
├── docs/
│   ├── guia-de-uso.md           # Guía detallada con ejemplos
│   └── cheat-sheet.md           # Referencia rápida de una página
├── examples/
│   ├── tema-clave-template.md   # Template vacío de Tema Clave
│   └── ejemplo-decision.md      # Ejemplo de decisión para probar
└── README.md
```

## Autor

Creado por [Marcos](https://linkedin.com/in/TU-PERFIL) como material de workshop para grupos de ejecutivos.
