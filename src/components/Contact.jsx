import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Section from "./common/Section";
import Button from "./common/Button";

export default function Contact() {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // TODO: 実際のフォーム送信処理を実装
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
  };

  return (
    <Section
      id="contact"
      title="Contact"
      subtitle="お気軽にご連絡ください。できるだけ早くご返信いたします。"
    >
      <div className="max-w-3xl mx-auto">
        <motion.form
          ref={form}
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-6 bg-white/50 dark:bg-gray-800/50 
                     backdrop-blur-lg rounded-2xl p-8 shadow-xl"
        >
          <div>
            <label className="block text-sm font-medium mb-2">
              お名前
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 
                       focus:ring-2 focus:ring-primary-500 
                       focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              メールアドレス
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 
                       focus:ring-2 focus:ring-primary-500 
                       focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              メッセージ
            </label>
            <textarea
              name="message"
              required
              rows="5"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 
                       focus:ring-2 focus:ring-primary-500 
                       focus:border-transparent resize-none"
            />
          </div>

          <Button
            type="submit"
            variant="primary"
            size="lg"
            isFullWidth
            disabled={isSubmitting}
          >
            {isSubmitting ? '送信中...' : '送信する'}
          </Button>
        </motion.form>
      </div>
    </Section>
  );
}