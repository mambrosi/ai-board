# Guía de uso — Tu Directorio de Asesores AI

## Configuración paso a paso

### Claude (recomendado)

1. Ir a [claude.ai](https://claude.ai)
2. En el menú lateral, click en **Projects** → **New Project**
3. Ponerle nombre: "Mi Directorio de Asesores"
4. Click en **Set custom instructions**
5. Copiar TODO el contenido de [`prompts/board.md`](../prompts/board.md) y pegarlo ahí
6. Completar la sección "My Context" con los datos de tu empresa
7. **Subir documentos** (click en el ícono de adjuntar dentro del proyecto):
   - Tu presentación de empresa
   - Temas clave o problemas que quieras analizar
   - Cualquier documento financiero, estratégico o de equipo relevante
8. Abrir un nuevo chat dentro del proyecto y empezar a plantear temas

### ChatGPT

1. Ir a [chatgpt.com](https://chatgpt.com)
2. Opción A: **Explorar GPTs → Crear** (crea un GPT personalizado)
3. Opción B: **Configuración → Personalización → Instrucciones personalizadas**
4. Pegar el contenido de [`prompts/board.md`](../prompts/board.md)
5. Para documentos de contexto: adjuntarlos directamente en cada chat

**Nota:** Claude Projects permite que los documentos persistan entre conversaciones. En ChatGPT hay que adjuntarlos cada vez, a menos que crees un GPT personalizado.

---

## Cómo plantear temas

### Opción 1: Tema libre

Simplemente escribí tu problema o decisión de forma directa:

> "Estoy evaluando abrir una segunda sucursal. Tenemos buena ocupación en la actual pero no sé si es el momento."

> "Mi socio quiere invertir en marketing digital pero yo creo que deberíamos mejorar el producto primero."

> "Un competidor me ofreció comprar mi empresa. No lo estaba buscando pero el número es interesante."

### Opción 2: Subir un Tema Clave

Si tenés un worksheet de Tema Clave (formato de grupo de pares como Vistage, EO, YPO o similar), subilo directamente o pegá el contenido. El board lo va a analizar sección por sección.

### Opción 3: Pedir análisis específico

> "Analicen mi P&L del último trimestre y díganme qué les preocupa."

> "Acabo de perder a mi gerente comercial. ¿Qué hago?"

---

## Comandos disponibles

| Lo que decís | Lo que pasa |
|---|---|
| *(plantear cualquier tema)* | Los 6 directores opinan en secuencia + resumen de acuerdos y tensiones |
| "Quiero hablar solo con el Director Financiero" | La conversación se enfoca en esa perspectiva |
| "Necesito tomar una decisión" | Los 6 votan: a favor / en contra / con condiciones |
| "Quiero explorar opciones" | Cada director propone un camino de acción diferente |
| *(subir un Tema Clave)* | Análisis completo tipo sesión de directorio |

También podés combinar:

> "Quiero explorar opciones y después votar"

> "Que opine solo el Abogado del Diablo sobre lo que acabo de plantear"

> "Director Comercial, explicame mejor tu punto sobre el pricing"

---

## Prompts de ejemplo para probar

Una vez configurado, probá con alguno de estos:

**Decisión de inversión:**
> "Estoy evaluando invertir $50.000 USD en automatizar un proceso clave de mi operación. ¿Qué opinan?"

**Problema de personas:**
> "Mi mejor empleado me pidió un aumento del 30% y no sé si puedo pagarlo sin comprometer el flujo. ¿Qué hago?"

**Oportunidad comercial:**
> "Un cliente grande me ofrece un contrato por 2 años pero me exige exclusividad en mi rubro. ¿Acepto?"

**Dilema estratégico:**
> "Tengo que elegir entre crecer agresivamente este año o consolidar lo que tengo. ¿Qué camino tomo?"

**Decisión personal/profesional:**
> "Estoy pensando en dejar mi empresa y arrancar algo nuevo. ¿Es el momento?"

---

## Tips para sacarle el máximo jugo

**Sobre el contexto:**
- Cuanto más sepa tu board sobre tu empresa, mejores las respuestas
- Tu presentación de empresa es el mejor documento de contexto — ya tiene historia, números y desafíos
- Actualizar el contexto periódicamente mejora la calidad de las respuestas

**Sobre el uso:**
- Usalo ANTES de decidir, no después — el valor está en testear, no en validar
- Si todos los directores están de acuerdo, preguntá "¿qué estamos dejando de ver?"
- Profundizá cuando algo te haga ruido: "Director Financiero, explicame mejor por qué decís que no da"
- Usalo para preparar temas antes de llevarlos a tu grupo de pares

**Sobre la honestidad:**
- No te enojes con el Abogado del Diablo — su trabajo es incomodarte
- Si sentís que el board te está dando la razón en todo, probablemente le estás dando poca información
- Las mejores decisiones salen de la fricción entre las perspectivas
