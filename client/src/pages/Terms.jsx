import { Link } from 'react-router-dom';
import './Terms.css';

export default function Terms() {
  return (
    <section className="terms-page">
      <div className="terms-wrapper">
        <h1 className="terms-heading">Terms and Conditions</h1>
        <p className="terms-updated">Last updated: {new Date().toLocaleDateString('en-US')}</p>

        <div className="terms-content">
          <h2>1. Accuracy of Information</h2>
          <p>
            <strong>I understand that I am submitting correct information.</strong> By creating an
            account on EasyGrade, you represent and warrant that all information you provide
            during registration—including your name, university, CWID, major, email, and contact
            details—is accurate, current, and complete. You agree to update your information
            promptly if it changes. Providing false or misleading information may result in
            suspension or termination of your account.
          </p>

          <h2>2. Account Responsibility</h2>
          <p>
            You are responsible for maintaining the confidentiality of your password and for all
            activity that occurs under your account. You must notify EasyGrade immediately of any
            unauthorized use of your account or any other breach of security.
          </p>

          <h2>3. Acceptable Use</h2>
          <p>
            You agree to use EasyGrade only for lawful academic purposes. You may not use the
            service to submit code or assignments that violate academic integrity policies of your
            institution, share answers with others in violation of course rules, or attempt to
            circumvent security or grading systems. Violations may result in account termination
            and reporting to your institution.
          </p>

          <h2>4. Privacy and Data</h2>
          <p>
            Information you provide is used to operate the service, verify your identity, and
            communicate with you about your account and assignments. We may share information with
            your institution as necessary for grading and course administration. By registering,
            you consent to such use and disclosure as described in our Privacy Policy.
          </p>

          <h2>5. Service Availability</h2>
          <p>
            EasyGrade is provided “as is.” We do not guarantee uninterrupted access and may
            modify, suspend, or discontinue the service with reasonable notice. Submission
            deadlines and grading timelines are subject to course and institutional policies.
          </p>

          <h2>6. Acceptance</h2>
          <p>
            By checking “I agree to the terms and conditions” and submitting the registration
            form, you confirm that you have read, understood, and agree to be bound by these Terms
            and Conditions.
          </p>
        </div>

        <p className="terms-footer">
          <Link to="/register">Back to Registration</Link>
        </p>
      </div>
    </section>
  );
}
