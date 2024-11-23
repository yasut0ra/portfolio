import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import Section from "./common/Section";
import Button from "./common/Button";

export default function Contact() {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      if (result.text === 'OK') {
        setStatus({
          type: 'success',
          message: 'メッセージを送信しました。ありがとうございます！'
        });
        form.current.reset();
      } else {
        throw new Error('送信に失敗しました');
      }
    } catch (error) {
      console.error('Failed to send email:', error);
      setStatus({
        type: 'error',
        message: 'メッセージの送信に失敗しました。もう一度お試しください。'
      });
    } finally {
      setIsSubmitting(false);
    }
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-6 bg-white/50 dark:bg-gray-800/50 
                     backdrop-blur-lg rounded-2xl p-8 shadow-xl"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                お名前
              </label>
              <input
                type="text"
                name="user_name"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 
                         dark:border-gray-600 bg-white dark:bg-gray-700
                         text-gray-900 dark:text-white
                         focus:ring-2 focus:ring-primary-500 
                         focus:border-transparent transition-colors"
                placeholder="山田 太郎"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                メールアドレス
              </label>
              <input
                type="email"
                name="user_email"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 
                         dark:border-gray-600 bg-white dark:bg-gray-700
                         text-gray-900 dark:text-white
                         focus:ring-2 focus:ring-primary-500 
                         focus:border-transparent transition-colors"
                placeholder="example@email.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
              件名
            </label>
            <input
              type="text"
              name="subject"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 
                       dark:border-gray-600 bg-white dark:bg-gray-700
                       text-gray-900 dark:text-white
                       focus:ring-2 focus:ring-primary-500 
                       focus:border-transparent transition-colors"
              placeholder="お問い合わせ内容の件名"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
              メッセージ
            </label>
            <textarea
              name="message"
              required
              rows="5"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 
                       dark:border-gray-600 bg-white dark:bg-gray-700
                       text-gray-900 dark:text-white
                       focus:ring-2 focus:ring-primary-500 
                       focus:border-transparent transition-colors resize-none"
              placeholder="メッセージを入力してください"
            />
          </div>

          {status.message && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={`p-4 rounded-lg ${
                status.type === 'success' 
                  ? 'bg-green-100 dark:bg-green-800/30 text-green-700 dark:text-green-300' 
                  : 'bg-red-100 dark:bg-red-800/30 text-red-700 dark:text-red-300'
              }`}
            >
              {status.message}
            </motion.div>
          )}

          <Button
            type="submit"
            variant="primary"
            size="lg"
            isFullWidth
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                送信中...
              </span>
            ) : '送信する'}
          </Button>
        </motion.form>
      </div>
    </Section>
  );
}