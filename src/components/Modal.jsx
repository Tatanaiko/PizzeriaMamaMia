export function Modal({ msg, onClose }) {
  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex justify-center items-center">
      <div className="w-80 bg-white rounded-lg border border-cyan-500 p-5 text-center">
        <p className="text-xl mb-4">{msg}</p>
        <button
          onClick={onClose}
          className="bg-black text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Cerrar
        </button>
      </div>
    </div>
  )
}
