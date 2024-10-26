export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-400 py-4 mt-auto">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} Servanin Tony Frontend Developer Portfolio. All rights reserved.</p>
      </div>
    </footer>
  )
}