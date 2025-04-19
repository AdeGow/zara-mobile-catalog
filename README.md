# Zara Mobile Catalog

Aplicación web que permite visualizar, buscar y gestionar un catálogo de teléfonos móviles, con funcionalidades de búsqueda en tiempo real, selección detallada y carrito de compras persistente.
El diseño está inspirado del sitio web de www.zara.com

Es un proyecto [Next.js](https://nextjs.org) bootstrapped con [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).
Repositorio: [https://github.com/AdeGow/zara-mobile-catalog](https://github.com/AdeGow/zara-mobile-catalog)

---

## Requisitos previos

Asegúrate de tener instaladas las siguientes herramientas en tu entorno de desarrollo:

- Node.js v18.x
- npm v9.x o superior (incluido con Node.js)

---

## 📦 Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/AdeGow/zara-mobile-catalog.git
cd zara-mobile-catalog
```

2. Instala las dependencias:

```bash
npm install
```

---

## ▶️ Ejecución del proyecto

### Modo desarrollo

```bash
npm run dev
```

Aplicación disponible en: `http://localhost:3000`

### Modo producción

```bash
npm run build
npm start
```

Esto genera los assets optimizados y minimizados.

---

## 🛠 Stack Tecnológico

- **Framework:** Next.js v15 (App Router)
- **Lenguaje:** TypeScript
- **Datos:** REST API
- **Renderizado:** SSR (Server Side Rendering)
- **Estilos:** Styled-components y variables CSS
- **Estado global:** React Context API
- **Persistencia local:** localStorage (para carrito de compras)
- **Testing:** Jest + React Testing Library
- **Linter y Formatter:** ESLint y Prettier (configurados por defecto en Next.js)

---

## 📚 Decisiones técnicas y desarrollo

### 1. **Arquitectura modular con App Router**
- Uso de componentes servidor para las rutas principales
- Separación clara entre componentes cliente (interactivos) y servidor (estáticos)

### 2. **Catálogo de 20 móviles con deduplicación**
- Se mostraron los primeros 20 teléfonos usando la API
- Se implementó una función de deduplicación de IDs para garantizar unicidad
- Se usó el parámetro offset para completar hasta 20 móviles si venían duplicados

### 3. **Buscador en tiempo real**
- Se implementó un barra de búsqueda de productos con debounce
- Las búsquedas se realizan vía la API usando el parámetro querystring
- Se muestra contador de resultados

### 4. **Vista de detalle**
- Secciones con imagen dinámica que cambia según el color seleccionado
- Selectores de almacenamiento y color que actualizan el precio en tiempo real
- Botón de "Añadir al carrito" solo disponible cuando hay selección válida
- Especificaciones técnicas y carousel de productos similares con scroll horizontal

### 5. **Carrito de compras persistente**
- Manejado completamente desde `localStorage`
- Capacidad de eliminar productos individualmente
- Visualización del precio total

### 6. **Diseño responsive, estilos y buenas prácticas**
- Layout responsivo según diseños del Figma proporcionado
- Uso de styled-components
- Variables CSS para colores y fuentes
- ESLint y Prettier integrados automáticamente por Next.js

### 7. **Testing unitario con Jest**
- Pruebas para contexto (`ProductsContext`), lógica de carrito y componentes como `MobileDetail`, `Cart`, `SearchProductBar`
- Mock de API y funciones de localStorage

### 8. **Modo dev y prod gestionado por Next.js**
- Gracias a Next.js, los modos de desarrollo y producción se configuran automáticamente:
  - `dev`: assets sin minimizar
  - `build`: assets minimizados y optimizados

---
