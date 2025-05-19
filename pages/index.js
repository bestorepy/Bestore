import { useState } from "react";
import { useRouter } from "next/router";

const productos = {
  1: { id: 1, nombre: "Reloj Clásico", precio: 150 },
  2: { id: 2, nombre: "Remera Urbana", precio: 80 },
  3: { id: 3, nombre: "Camisa Formal", precio: 120 },
};

export default function Producto() {
  const router = useRouter();
  const { id } = router.query;
  const producto = productos[id];

  const [step, setStep] = useState(1);
  const [cantidad, setCantidad] = useState(1);
  const [tamaño, setTamaño] = useState("");
  const [color, setColor] = useState("");

  if (!producto) return <p>Cargando producto...</p>;

  const precioFinal = producto.precio * cantidad;

  const numeroWhatsApp = "595973983212"; // tu número Paraguay

  const mensajeWhatsApp = encodeURIComponent(
    `Hola, quiero este producto: ${producto.nombre}
Cantidad: ${cantidad}
Tamaño: ${tamaño}
Color: ${color}
Precio final: $${precioFinal}`
  );

  const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`;

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>{producto.nombre}</h1>

      {step === 1 && (
        <div style={styles.stepBox}>
          <h2 style={styles.stepTitle}>Cantidad</h2>
          <input
            type="number"
            min="1"
            value={cantidad}
            onChange={(e) => setCantidad(Number(e.target.value))}
            style={styles.input}
          />
          <button onClick={() => setStep(2)} style={styles.button}>
            ✔️ Siguiente
          </button>
        </div>
      )}

      {step === 2 && (
        <div style={styles.stepBox}>
          <h2 style={styles.stepTitle}>Tamaño</h2>
          <select
            value={tamaño}
            onChange={(e) => setTamaño(e.target.value)}
            style={styles.select}
          >
            <option value="">Selecciona un tamaño</option>
            <option value="Pequeño">Pequeño</option>
            <option value="Mediano">Mediano</option>
            <option value="Grande">Grande</option>
          </select>
          <button disabled={!tamaño} onClick={() => setStep(3)} style={styles.button}>
            ✔️ Siguiente
          </button>
        </div>
      )}

      {step === 3 && (
        <div style={styles.stepBox}>
          <h2 style={styles.stepTitle}>Color</h2>
          <select
            value={color}
            onChange={(e) => setColor(e.target.value)}
            style={styles.select}
          >
            <option value="">Selecciona un color</option>
            <option value="Negro">Negro</option>
            <option value="Blanco">Blanco</option>
            <option value="Azul">Azul</option>
            <option value="Rojo">Rojo</option>
          </select>
          <button disabled={!color} onClick={() => setStep(4)} style={styles.button}>
            ✔️ Siguiente
          </button>
        </div>
      )}

      {step === 4 && (
        <div style={styles.stepBox}>
          <h2 style={styles.stepTitle}>Precio Final: ${precioFinal}</h2>
          <a
            href={linkWhatsApp}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.whatsappButton}
          >
            Enviar por WhatsApp
          </a>
          <button onClick={() => setStep(1)} style={styles.buttonBack}>
            ← Volver al inicio
          </button>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "500px",
    margin: "50px auto",
    padding: "0 20px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    textAlign: "center",
  },
  title: {
    fontSize: "2.8rem",
    fontWeight: "700",
    marginBottom: "30px",
  },
  stepBox: {
    marginBottom: "40px",
  },
  stepTitle: {
    fontSize: "1.8rem",
    marginBottom: "15px",
  },
  input: {
    fontSize: "1.2rem",
    padding: "10px",
    width: "80%",
    marginBottom: "20px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },
  select: {
    fontSize: "1.2rem",
    padding: "10px",
    width: "85%",
    marginBottom: "20px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },
  button: {
    backgroundColor: "#333",
    color: "white",
    fontSize: "1.2rem",
    padding: "12px 30px",
    border: "none",
    borderRadius: "30px",
    cursor: "pointer",
    fontWeight: "600",
  },
  buttonBack: {
    marginTop: "20px",
    backgroundColor: "#ccc",
    color: "#333",
    fontSize: "1rem",
    padding: "10px 25px",
    border: "none",
    borderRadius: "20px",
    cursor: "pointer",
  },
  whatsappButton: {
    display: "inline-block",
    backgroundColor: "#25D366",
    color: "white",
    fontWeight: "700",
    padding: "12px 30px",
    borderRadius: "30px",
    textDecoration: "none",
    fontSize: "1.3rem",
  },
};
