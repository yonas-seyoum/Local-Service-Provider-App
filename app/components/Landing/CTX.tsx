import Link from "next/link";

export default function CTX() {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          Ready to Get Started?
        </h2>
        <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
          Join thousands of customers and providers who trust ServiceConnect for
          their service needs
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
          <button className="flex-1 bg-white text-blue-600 px-8 py-4 rounded-xl font-medium hover:bg-gray-50 transition-colors">
            Find Services
          </button>
          <Link
            href="/auth"
            className="flex-1 bg-blue-800 text-white px-8 py-4 rounded-xl font-medium hover:bg-blue-900 transition-colors"
          >
            Become a Provider
          </Link>
        </div>
      </div>
    </section>
  );
}
