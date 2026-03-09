import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const [status, setStatus] = useState('idle');
  const GAS_URL = "YOUR_GAS_DEPLOY_URL_HERE"; // デプロイしたURLを貼ってな

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    setStatus('loading');
    try {
      await fetch(GAS_URL, {
        method: "POST",
        mode: "no-cors", // GASの仕様上、no-corsが安定するに
        body: JSON.stringify(data),
      });
      setStatus('success');
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-cyan-50 text-cyan-700 p-6 rounded-2xl font-bold">
        完了やに！爆速で確認するもんで、松阪牛でも食べて待っとってな。
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-left">
      <div>
        <label className="text-xs font-bold text-gray-400 ml-2 uppercase">Email</label>
        <input name="email" type="email" required className="w-full p-4 rounded-2xl bg-gray-100 border-none focus:ring-2 focus:ring-cyan-400 outline-none transition-all" placeholder="your@email.com" />
      </div>
      <div>
        <label className="text-xs font-bold text-gray-400 ml-2 uppercase">Message</label>
        <textarea name="message" required rows="4" className="w-full p-4 rounded-2xl bg-gray-100 border-none focus:ring-2 focus:ring-cyan-400 outline-none transition-all" placeholder="なっとしたん？相談内容書いてな。" />
      </div>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full bg-gray-900 text-white p-5 rounded-2xl font-black text-lg shadow-lg hover:shadow-cyan-200 transition-all disabled:opacity-50"
        disabled={status === 'loading'}
      >
        {status === 'loading' ? '自動化コード実行中...' : '相談を送るやに'}
      </motion.button>
      {status === 'error' && <p className="text-red-500 text-sm mt-2">できやんやん！もう一度試してみてな。</p>}
    </form>
  );
};

export default ContactForm;
