import { Button } from "@/components/ui/button";
import Link from "next/link";

const CTASection = () => {
  return (
    <section className="py-20 bg-blue-600 w-[100%]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-center mb-4">
          Ready to Take Control of Your Finance?
        </h2>
        <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
          Join Thousands of users who are already managing their finances
          smarter
        </p>
        <Link href="/dashboard">
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-blue-50 animate-bounce"
          >
            Start Free Trial
          </Button>
        </Link>
      </div>
    </section>
  );
};
export default CTASection;
