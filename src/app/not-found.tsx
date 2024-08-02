import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="bg-gradient-to-t from-gray-800 min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <img src="https://s3-alpha-sig.figma.com/img/746c/a50e/fb2d7a6d4e5143d4b045e52a13980cea?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=S7jj77xn7f8ISuuSlu8z5EjulEEaL5pKadAMlBLuwEyjKBF-pdfwE2in2u9S0eV4yF9oBNjNQo8NC0qRovosSYntzhpOFgiXFdmODelw7gSA16H4ZESHDpb9z4a1i8Mtyif0OUTFqscWs~aT5afVwpn4iZVlIY7aco97~49d632sBpo5dIzV-IB74pr2fwdqE1DZibwUDgApFvT0C185eaX4eJcwvzkPpP6ojtSZVDXdxTXfBRHY5mRY3gRSTk3laHAIpM-lkG5N~ehcYmeOSUxR8VyN7ZasIFvLngHLa0h5M0BgL4xmsJidj9H0gNTOp8BpKBDlISmjeQQ6SibgGQ__" alt="gatito Not Found" />
      <h1 className="text-6xl font-bold text-gray-50 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-50 mb-2">Página No encontrada</h2>
      <p className="text-lg text-gray-50 mb-8">No se pudo encontrar la pagina solicitada</p>
      <Link href="/" className="px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded hover:bg-blue-700 transition">
      Regresar al Home</Link>
    </div>
  )
}