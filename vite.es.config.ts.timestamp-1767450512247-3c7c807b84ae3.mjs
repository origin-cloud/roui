// vite.es.config.ts
import { fileURLToPath, URL } from "node:url";
import { resolve } from "path";
import { defineConfig } from "file:///D:/%E6%A1%8C%E9%9D%A2/my/zu/roui/node_modules/vite/dist/node/index.js";
import dts from "file:///D:/%E6%A1%8C%E9%9D%A2/my/zu/roui/node_modules/vite-plugin-dts/dist/index.mjs";
var __vite_injected_original_dirname = "D:\\\u684C\u9762\\my\\zu\\roui";
var __vite_injected_original_import_meta_url = "file:///D:/%E6%A1%8C%E9%9D%A2/my/zu/roui/vite.es.config.ts";
var vite_es_config_default = defineConfig({
  plugins: [
    /*  VueMacros.vite({
      plugins: {
        vue: vue(),
        vueJsx: vueJsx(),
      },
    }), */
    dts({
      tsconfigPath: "./tsconfig.build.json",
      outDir: "dist/types"
    })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  },
  build: {
    outDir: "dist/es",
    lib: {
      entry: resolve(__vite_injected_original_dirname, "src/index.ts"),
      name: "RElement",
      fileName: "r-element",
      formats: ["es"]
    },
    rollupOptions: {
      external: [
        "vue",
        "@fortawesome/fontawesome-svg-core",
        "@fortawesome/free-solid-svg-icons",
        "@fortawesome/vue-fontawesome",
        "async-validator",
        "@popperjs/core",
        "axios"
      ],
      output: {
        assetFileNames: (chunkInfo) => {
          if (chunkInfo.name === "style.scss") {
            return "index.scss";
          }
          return chunkInfo.name;
        }
      }
    }
  }
});
export {
  vite_es_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5lcy5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxcdTY4NENcdTk3NjJcXFxcbXlcXFxcenVcXFxccm91aVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcXHU2ODRDXHU5NzYyXFxcXG15XFxcXHp1XFxcXHJvdWlcXFxcdml0ZS5lcy5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6LyVFNiVBMSU4QyVFOSU5RCVBMi9teS96dS9yb3VpL3ZpdGUuZXMuY29uZmlnLnRzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAnbm9kZTp1cmwnXG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSAncGF0aCdcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcbmltcG9ydCB2dWVKc3ggZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlLWpzeCdcbmltcG9ydCBWdWVNYWNyb3MgZnJvbSAndW5wbHVnaW4tdnVlLW1hY3JvcydcbmltcG9ydCBkdHMgZnJvbSAndml0ZS1wbHVnaW4tZHRzJ1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIC8qICBWdWVNYWNyb3Mudml0ZSh7XG4gICAgICBwbHVnaW5zOiB7XG4gICAgICAgIHZ1ZTogdnVlKCksXG4gICAgICAgIHZ1ZUpzeDogdnVlSnN4KCksXG4gICAgICB9LFxuICAgIH0pLCAqL1xuICAgIGR0cyh7XG4gICAgICB0c2NvbmZpZ1BhdGg6ICcuL3RzY29uZmlnLmJ1aWxkLmpzb24nLFxuICAgICAgb3V0RGlyOiAnZGlzdC90eXBlcycsXG4gICAgfSksXG4gIF0sXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgJ0AnOiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoJy4vc3JjJywgaW1wb3J0Lm1ldGEudXJsKSksXG4gICAgfSxcbiAgfSxcbiAgYnVpbGQ6IHtcbiAgICBvdXREaXI6ICdkaXN0L2VzJyxcbiAgICBsaWI6IHtcbiAgICAgIGVudHJ5OiByZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9pbmRleC50cycpLFxuICAgICAgbmFtZTogJ1JFbGVtZW50JyxcbiAgICAgIGZpbGVOYW1lOiAnci1lbGVtZW50JyxcbiAgICAgIGZvcm1hdHM6IFsnZXMnXSxcbiAgICB9LFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIGV4dGVybmFsOiBbXG4gICAgICAgICd2dWUnLFxuICAgICAgICAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlJyxcbiAgICAgICAgJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucycsXG4gICAgICAgICdAZm9ydGF3ZXNvbWUvdnVlLWZvbnRhd2Vzb21lJyxcbiAgICAgICAgJ2FzeW5jLXZhbGlkYXRvcicsXG4gICAgICAgICdAcG9wcGVyanMvY29yZScsXG4gICAgICAgICdheGlvcycsXG4gICAgICBdLFxuICAgICAgb3V0cHV0OiB7XG4gICAgICAgIGFzc2V0RmlsZU5hbWVzOiAoY2h1bmtJbmZvKSA9PiB7XG4gICAgICAgICAgaWYgKGNodW5rSW5mby5uYW1lID09PSAnc3R5bGUuc2NzcycpIHtcbiAgICAgICAgICAgIHJldHVybiAnaW5kZXguc2NzcydcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGNodW5rSW5mby5uYW1lIGFzIHN0cmluZ1xuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBa1EsU0FBUyxlQUFlLFdBQVc7QUFDclMsU0FBUyxlQUFlO0FBQ3hCLFNBQVMsb0JBQW9CO0FBSTdCLE9BQU8sU0FBUztBQU5oQixJQUFNLG1DQUFtQztBQUEyRyxJQUFNLDJDQUEyQztBQVNyTSxJQUFPLHlCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFPUCxJQUFJO0FBQUEsTUFDRixjQUFjO0FBQUEsTUFDZCxRQUFRO0FBQUEsSUFDVixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxjQUFjLElBQUksSUFBSSxTQUFTLHdDQUFlLENBQUM7QUFBQSxJQUN0RDtBQUFBLEVBQ0Y7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLFFBQVE7QUFBQSxJQUNSLEtBQUs7QUFBQSxNQUNILE9BQU8sUUFBUSxrQ0FBVyxjQUFjO0FBQUEsTUFDeEMsTUFBTTtBQUFBLE1BQ04sVUFBVTtBQUFBLE1BQ1YsU0FBUyxDQUFDLElBQUk7QUFBQSxJQUNoQjtBQUFBLElBQ0EsZUFBZTtBQUFBLE1BQ2IsVUFBVTtBQUFBLFFBQ1I7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQSxRQUFRO0FBQUEsUUFDTixnQkFBZ0IsQ0FBQyxjQUFjO0FBQzdCLGNBQUksVUFBVSxTQUFTLGNBQWM7QUFDbkMsbUJBQU87QUFBQSxVQUNUO0FBQ0EsaUJBQU8sVUFBVTtBQUFBLFFBQ25CO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
