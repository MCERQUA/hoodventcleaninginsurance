import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowRight, CheckCircle2, User, Building, DollarSign, Calendar, MapPin, Mail, Phone, Hash, FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";

const totalSteps = 4; // Business Info, Last 12 Months, Next 12 Months, Submit Contact

export const QuoteWizardForm = ({ onComplete }: { onComplete?: () => void }) => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<any>({
    businessName: "",
    fein: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    email: "",
    phone: "",
    actualGrossSales: "",
    subcontractingCosts: "",
    numEmployees: "",
    employeePayroll: "",
    numProjects: "",
    largestJobAmount: "",
    largestJobDescription: "",
    estimatedGross: "",
    estimatedSubcontractingCosts: "",
    estimatedNumEmployees: "",
    estimatedEmployeePayroll: "",
    estimatedOwnerPayrollDraw: "",
    estimatedMaterialCosts: "",
    exampleUpcomingJobAmount: "",
    exampleUpcomingJobDescription: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
  };

  const handlePrev = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const encode = (data: any) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "quote-wizard", ...formData }),
    })
      .then(() => {
        setIsSubmitting(false);
        if (onComplete) onComplete();
        navigate("/success");
      })
      .catch((error) => {
        alert("Error submitting form: " + error);
        setIsSubmitting(false);
      });
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <motion.div
            key="step0"
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -20, opacity: 0 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Business Information</h3>
            <div className="space-y-4">
              <input type="hidden" name="form-name" value="quote-wizard" />
              <div>
                <label htmlFor="businessName" className="text-sm font-medium text-muted-foreground mb-2 block">Business Name</label>
                <input type="text" id="businessName" name="businessName" value={formData.businessName} onChange={handleChange} required className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-primary focus:ring-1 focus:ring-primary outline-none text-white transition-all" placeholder="Your Business Name" />
              </div>
              <div>
                <label htmlFor="fein" className="text-sm font-medium text-muted-foreground mb-2 block">FEIN</label>
                <input type="text" id="fein" name="fein" value={formData.fein} onChange={handleChange} required className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-primary focus:ring-1 focus:ring-primary outline-none text-white transition-all" placeholder="XX-XXXXXXX" />
              </div>
              <div>
                <label htmlFor="address" className="text-sm font-medium text-muted-foreground mb-2 block">Address</label>
                <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} required className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-primary focus:ring-1 focus:ring-primary outline-none text-white transition-all" placeholder="Street Address" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                  <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} required className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-primary focus:ring-1 focus:ring-primary outline-none text-white transition-all" placeholder="City" />
                  <input type="text" id="state" name="state" value={formData.state} onChange={handleChange} required className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-primary focus:ring-1 focus:ring-primary outline-none text-white transition-all" placeholder="State" />
                  <input type="text" id="zip" name="zip" value={formData.zip} onChange={handleChange} required className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-primary focus:ring-1 focus:ring-primary outline-none text-white transition-all" placeholder="ZIP" />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium text-muted-foreground mb-2 block">Email *</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-primary focus:ring-1 focus:ring-primary outline-none text-white transition-all" placeholder="email@example.com" />
              </div>
              <div>
                <label htmlFor="phone" className="text-sm font-medium text-muted-foreground mb-2 block">Phone *</label>
                                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-primary focus:ring-1 focus:ring-primary outline-none text-white transition-all" placeholder="(555) 123-4567" />              </div>
            </div>
          </motion.div>
        );
      case 1:
        return (
          <motion.div
            key="step1"
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -20, opacity: 0 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">During the Last 12 Months</h3>
            <div className="space-y-4">
              <div>
                <label htmlFor="actualGrossSales" className="text-sm font-medium text-muted-foreground mb-2 block">Actual Gross Sales</label>
                <input type="number" id="actualGrossSales" name="actualGrossSales" value={formData.actualGrossSales} onChange={handleChange} required className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-primary focus:ring-1 focus:ring-primary outline-none text-white transition-all" placeholder="$" />
              </div>
              <div>
                <label htmlFor="subcontractingCosts" className="text-sm font-medium text-muted-foreground mb-2 block">Subcontracting Costs</label>
                <input type="number" id="subcontractingCosts" name="subcontractingCosts" value={formData.subcontractingCosts} onChange={handleChange} required className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-primary focus:ring-1 focus:ring-primary outline-none text-white transition-all" placeholder="$" />
              </div>
              <div>
                <label htmlFor="numEmployees" className="text-sm font-medium text-muted-foreground mb-2 block">Number of Employees</label>
                <input type="number" id="numEmployees" name="numEmployees" value={formData.numEmployees} onChange={handleChange} required className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-primary focus:ring-1 focus:ring-primary outline-none text-white transition-all" placeholder="e.g., 5" />
              </div>
              <div>
                <label htmlFor="employeePayroll" className="text-sm font-medium text-muted-foreground mb-2 block">Employee Payroll</label>
                <input type="number" id="employeePayroll" name="employeePayroll" value={formData.employeePayroll} onChange={handleChange} required className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-primary focus:ring-1 focus:ring-primary outline-none text-white transition-all" placeholder="$" />
              </div>
              <div>
                <label htmlFor="numProjects" className="text-sm font-medium text-muted-foreground mb-2 block">Number of Projects Performed</label>
                <input type="number" id="numProjects" name="numProjects" value={formData.numProjects} onChange={handleChange} required className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-primary focus:ring-1 focus:ring-primary outline-none text-white transition-all" placeholder="e.g., 25" />
              </div>
              <div>
                <label htmlFor="largestJobAmount" className="text-sm font-medium text-muted-foreground mb-2 block">Largest Job - Dollar Amount</label>
                <input type="number" id="largestJobAmount" name="largestJobAmount" value={formData.largestJobAmount} onChange={handleChange} required className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-primary focus:ring-1 focus:ring-primary outline-none text-white transition-all" placeholder="$" />
              </div>
              <div>
                <label htmlFor="largestJobDescription" className="text-sm font-medium text-muted-foreground mb-2 block">Largest Job - Description</label>
                <textarea id="largestJobDescription" name="largestJobDescription" value={formData.largestJobDescription} onChange={handleChange} required className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-primary focus:ring-1 focus:ring-primary outline-none text-white transition-all" placeholder="Brief description of the job" rows={3} />
              </div>
            </div>
          </motion.div>
        );
      case 2:
        return (
          <motion.div
            key="step2"
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -20, opacity: 0 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">During the Next 12 Months (Estimates)</h3>
            <div className="space-y-4">
              <div>
                <label htmlFor="estimatedGross" className="text-sm font-medium text-muted-foreground mb-2 block">Estimated Gross</label>
                <input type="number" id="estimatedGross" name="estimatedGross" value={formData.estimatedGross} onChange={handleChange} required className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-primary focus:ring-1 focus:ring-primary outline-none text-white transition-all" placeholder="$" />
              </div>
              <div>
                <label htmlFor="estimatedSubcontractingCosts" className="text-sm font-medium text-muted-foreground mb-2 block">Estimated Subcontracting Costs</label>
                <input type="number" id="estimatedSubcontractingCosts" name="estimatedSubcontractingCosts" value={formData.estimatedSubcontractingCosts} onChange={handleChange} required className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-primary focus:ring-1 focus:ring-primary outline-none text-white transition-all" placeholder="$" />
              </div>
              <div>
                <label htmlFor="estimatedNumEmployees" className="text-sm font-medium text-muted-foreground mb-2 block">Estimated Number of Employees</label>
                <input type="number" id="estimatedNumEmployees" name="estimatedNumEmployees" value={formData.estimatedNumEmployees} onChange={handleChange} required className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-primary focus:ring-1 focus:ring-primary outline-none text-white transition-all" placeholder="e.g., 6" />
              </div>
              <div>
                <label htmlFor="estimatedEmployeePayroll" className="text-sm font-medium text-muted-foreground mb-2 block">Estimated Employee Payroll</label>
                <input type="number" id="estimatedEmployeePayroll" name="estimatedEmployeePayroll" value={formData.estimatedEmployeePayroll} onChange={handleChange} required className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-primary focus:ring-1 focus:ring-primary outline-none text-white transition-all" placeholder="$" />
              </div>
              <div>
                <label htmlFor="estimatedOwnerPayrollDraw" className="text-sm font-medium text-muted-foreground mb-2 block">Estimated Owner Payroll/Draw</label>
                <input type="number" id="estimatedOwnerPayrollDraw" name="estimatedOwnerPayrollDraw" value={formData.estimatedOwnerPayrollDraw} onChange={handleChange} required className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-primary focus:ring-1 focus:ring-primary outline-none text-white transition-all" placeholder="$" />
              </div>
              <div>
                <label htmlFor="estimatedMaterialCosts" className="text-sm font-medium text-muted-foreground mb-2 block">Estimated Material Costs</label>
                <input type="number" id="estimatedMaterialCosts" name="estimatedMaterialCosts" value={formData.estimatedMaterialCosts} onChange={handleChange} required className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-primary focus:ring-1 focus:ring-primary outline-none text-white transition-all" placeholder="$" />
              </div>
              <div>
                <label htmlFor="exampleUpcomingJobAmount" className="text-sm font-medium text-muted-foreground mb-2 block">Example Upcoming Job - Dollar Amount</label>
                <input type="number" id="exampleUpcomingJobAmount" name="exampleUpcomingJobAmount" value={formData.exampleUpcomingJobAmount} onChange={handleChange} required className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-primary focus:ring-1 focus:ring-primary outline-none text-white transition-all" placeholder="$" />
              </div>
              <div>
                <label htmlFor="exampleUpcomingJobDescription" className="text-sm font-medium text-muted-foreground mb-2 block">Example Upcoming Job - Description</label>
                <textarea id="exampleUpcomingJobDescription" name="exampleUpcomingJobDescription" value={formData.exampleUpcomingJobDescription} onChange={handleChange} required className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-primary focus:ring-1 focus:ring-primary outline-none text-white transition-all" placeholder="Brief description of the job" rows={3} />
              </div>
            </div>
          </motion.div>
        );
      case 3: // Final Review / Submit
        return (
          <motion.div
            key="step3"
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -20, opacity: 0 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Review Your Information</h3>
            <div className="space-y-4 text-muted-foreground">
              {Object.entries(formData).map(([key, value]) => (
                <div key={key} className="flex justify-between border-b border-white/5 pb-2">
                  <span className="font-medium">{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}:</span>
                  <span>{String(value)}</span>
                </div>
              ))}
            </div>
          </motion.div>
        );
      default:
        return null;
    }
  };

  if (isSuccess) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 text-green-500">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Quote Request Received!</h3>
        <p className="text-muted-foreground mb-6">
          An agent is reviewing your information now. We will contact you with competitive quotes within 24 hours.
        </p>
        <button 
          onClick={() => {
            setFormData({});
            setCurrentStep(0);
            setIsSuccess(false);
            if (onComplete) onComplete();
          }}
          className="text-primary hover:underline font-medium"
        >
          Submit Another Request
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="relative">
      {/* Progress Indicators */}
      <div className="flex justify-between items-center mb-8">
        <span className="text-sm font-medium text-muted-foreground">
          Step {currentStep + 1} of {totalSteps}
        </span>
        <div className="flex gap-1">
          {Array.from({ length: totalSteps }).map((_, idx) => (
            <div 
              key={idx}
              className={`h-1 w-8 rounded-full transition-colors ${
                idx <= currentStep ? "bg-primary" : "bg-white/10"
              }`} 
            />
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        {renderStep()}
      </AnimatePresence>

      <div className="flex justify-between mt-8">
        {currentStep > 0 && (
          <motion.button
            type="button"
            onClick={handlePrev}
            className="px-6 py-3 rounded-xl bg-white/5 text-muted-foreground hover:bg-white/10 transition-colors font-medium"
          >
            ← Previous
          </motion.button>
        )}

        {currentStep < totalSteps - 1 && (
          <motion.button
            type="button"
            onClick={handleNext}
            className={`px-6 py-3 rounded-xl bg-primary text-white hover:bg-primary/90 transition-colors font-bold ${currentStep === 0 && !formData.businessName ? 'ml-auto' : ''}`}
          >
            Next →
          </motion.button>
        )}

        {currentStep === totalSteps - 1 && (
          <motion.button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-3 rounded-xl bg-accent text-white hover:bg-accent/90 transition-colors font-bold ml-auto"
          >
            {isSubmitting ? "Submitting..." : "Submit Quote Request"}
          </motion.button>
        )}
      </div>
    </form>
  );
};
