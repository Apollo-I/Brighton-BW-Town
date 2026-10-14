'use client';

import Link from 'next/link';

/**
 * Non-submitting preview form.
 *
 * Every control is disabled and submission is prevented. This form exists so
 * reviewers can see the intended fields; it is never rendered as active until
 * a real, monitored form destination exists. No "message sent" state exists
 * anywhere in this component.
 */

const interestCategories = [
  'Resident — community priority',
  'Business partnership or sponsorship',
  'Community organization collaboration',
  'Funding partner inquiry',
  'Media or general question',
];

export function PreviewInquiryForm() {
  return (
    <form
      aria-describedby="preview-form-note"
      onSubmit={(e) => {
        e.preventDefault();
      }}
      style={{ marginTop: '2rem' }}
    >
      <div className="callout callout-gold" id="preview-form-note" style={{ marginBottom: '1.4rem' }}>
        <p className="mb-0">
          <strong>Preview only — this form does not submit.</strong> It shows
          the fields the partnership intends to collect: name, email,
          organization (optional), interest category, message, and
          acknowledgement of the privacy notice. No financial, identity, or
          other sensitive information is ever requested.
        </p>
      </div>

      <div className="form-grid">
        <div className="field">
          <label htmlFor="pv-name">Name</label>
          <input id="pv-name" name="name" type="text" autoComplete="name" disabled />
        </div>
        <div className="field">
          <label htmlFor="pv-email">Email</label>
          <input id="pv-email" name="email" type="email" autoComplete="email" disabled />
        </div>
        <div className="field">
          <label htmlFor="pv-org">
            Organization <span className="hint">(optional)</span>
          </label>
          <input
            id="pv-org"
            name="organization"
            type="text"
            autoComplete="organization"
            disabled
          />
        </div>
        <div className="field">
          <label htmlFor="pv-interest">I’m interested as…</label>
          <select id="pv-interest" name="interest" disabled>
            {interestCategories.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="pv-message">Message</label>
          <textarea id="pv-message" name="message" disabled />
        </div>
        <div className="checkbox-field">
          <input type="checkbox" id="pv-ack" disabled />
          <label htmlFor="pv-ack">
            I have read the <Link href="/privacy/">privacy notice</Link> and
            agree to be contacted about this inquiry.
          </label>
        </div>
        <div>
          <button
            type="submit"
            className="btn btn-primary"
            disabled
            aria-disabled="true"
          >
            Send inquiry (preview — not active)
          </button>
        </div>
      </div>
    </form>
  );
}
