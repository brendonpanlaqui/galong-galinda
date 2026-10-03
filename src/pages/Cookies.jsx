export default function Cookies() {
  return (
    <main className="w-full pt-[22px] pb-24 bg-background flex-1">
      <div className="max-w-4xl mx-auto px-4 lg:px-8">
        
        <div className="mb-12 border-b border-surface-container-high pb-8">
          <span className="font-label-badge text-label-badge uppercase tracking-wider text-primary">Legal Information</span>
          <h1 className="font-headline-lg text-4xl lg:text-5xl font-bold text-on-surface mt-2">Cookie Information</h1>
          <p className="font-label-md text-label-md text-on-surface-variant mt-4">Effective Date: October 3, 2026</p>
        </div>

        <div className="font-body-md text-body-md text-on-surface-variant flex flex-col gap-6">
          <p>
            This Cookie Policy explains how Galóng Galínda uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
          </p>

          <h2 className="font-headline-sm text-headline-sm font-bold text-on-surface mt-4">1. What are cookies?</h2>
          <p>Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.</p>

          <h2 className="font-headline-sm text-headline-sm font-bold text-on-surface mt-4">2. Why do we use cookies?</h2>
          <p>We use first-party and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our website to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies enable us to track and target the interests of our users to enhance the experience on our platform.</p>

          <h2 className="font-headline-sm text-headline-sm font-bold text-on-surface mt-4">3. Types of Cookies We Use</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Essential Cookies:</strong> These cookies are strictly necessary to provide you with services available through our website and to use some of its features, such as access to secure areas.</li>
            <li><strong>Performance and Functionality Cookies:</strong> These are used to enhance the performance and functionality of our website but are non-essential to their use. However, without these cookies, certain functionality (like videos) may become unavailable.</li>
            <li><strong>Analytics and Customization Cookies:</strong> These cookies collect information that is used either in aggregate form to help us understand how our website is being used or how effective our informational campaigns are.</li>
          </ul>

          <h2 className="font-headline-sm text-headline-sm font-bold text-on-surface mt-4">4. Third-Party Services</h2>
          <p>Our website utilizes embedded content from third-party platforms, such as Facebook video reels. When you interact with this embedded content, these third parties may set their own cookies on your device to track your interaction. Galóng Galínda does not control the placement of these third-party cookies.</p>

          <h2 className="font-headline-sm text-headline-sm font-bold text-on-surface mt-4">5. How can you control cookies?</h2>
          <p>You have the right to decide whether to accept or reject cookies. You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted.</p>

          <div className="mt-8 p-6 bg-primary-container/20 border border-primary/30 rounded-xl">
            <p className="font-body-sm text-sm text-on-surface">
              <strong className="text-primary font-bold">Educational Note:</strong> This site is hosted as an academic project and relies on standard session variables and local storage mechanisms necessary for site operation. We do not actively sell or monetize user tracking data.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}