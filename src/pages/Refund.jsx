export default function Refund() {
  return (
    <main className="w-full pt-[22px] pb-24 bg-background flex-1">
      <div className="max-w-4xl mx-auto px-4 lg:px-8">
        
        <div className="mb-12 border-b border-surface-container-high pb-8">
          <span className="font-label-badge text-label-badge uppercase tracking-wider text-primary">Legal Information</span>
          <h1 className="font-headline-lg text-4xl lg:text-5xl font-bold text-on-surface mt-2">Refund & Return Policy</h1>
          <p className="font-label-md text-label-md text-on-surface-variant mt-4">Effective Date: October 3, 2026</p>
        </div>

        <div className="font-body-md text-body-md text-on-surface-variant flex flex-col gap-6">
          <p>
            Thank you for supporting Galóng Galínda. We strive to provide high-quality sports officiating services and carefully formulated athletic products. Please read our policy regarding returns, exchanges, and refunds.
          </p>

          <h2 className="font-headline-sm text-headline-sm font-bold text-on-surface mt-4">1. Physical Products (ArmFeet Powder)</h2>
          <p>We accept exchanges for physical merchandise under the following conditions:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>The item is defective, damaged upon receipt, or the wrong size/variant was provided.</li>
            <li>The exchange request is made within three (3) school days from the date of pickup or delivery.</li>
            <li>The item is unused, unworn, and remains in its original packaging with all tags attached.</li>
          </ul>
          <p>If an exchange is approved but the replacement item is out of stock, a full refund will be issued.</p>

          <h2 className="font-headline-sm text-headline-sm font-bold text-on-surface mt-4">2. Perishable Products (Nutrifit Crackers)</h2>
          <p>For health and safety reasons, we do not accept returns or offer refunds for perishable food items such as Nutrifit Crackers once they have been handed over to the customer, unless the product is proven to be expired or contaminated upon receipt.</p>

          <h2 className="font-headline-sm text-headline-sm font-bold text-on-surface mt-4">3. Officiating & Event Services</h2>
          <p>Refunds and cancellations for booked officiating services and referee clinics are subject to the following guidelines:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Cancellations:</strong> If an event is cancelled by the organizers at least 48 hours prior to the scheduled tip-off, any advanced deposits will be refunded in full.</li>
            <li><strong>Late Cancellations:</strong> Cancellations made less than 48 hours before the event may be subject to a forfeiture of the deposit to compensate the scheduled student-officials.</li>
            <li><strong>Rescheduling:</strong> In the event of weather disturbances or campus closures, services can be rescheduled at no additional cost, subject to the availability of the officiating crew.</li>
          </ul>

          <h2 className="font-headline-sm text-headline-sm font-bold text-on-surface mt-4">4. Process for Requesting an Exchange or Refund</h2>
          <p>To request a return or refund, please visit our campus office at the CCA Physical Education Department or contact us via email at <strong className="text-on-surface">galonggalinda@gmail.com</strong> with your receipt and proof of the defect or cancellation notice.</p>

          <div className="mt-8 p-6 bg-primary-container/20 border border-primary/30 rounded-xl">
            <p className="font-body-sm text-sm text-on-surface">
              <strong className="text-primary font-bold">Educational Note:</strong> This is a website-ready educational draft. All product purchases, service bookings, and financial transactions simulated on this website are part of an academic demonstration for the City College of Angeles and are not legally binding commercial agreements.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}