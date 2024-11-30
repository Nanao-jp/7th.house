"use client"

import { motion } from 'framer-motion'
import { useForm, SubmitHandler } from 'react-hook-form'
import Button from '@/components/ui/Button'

interface IFormInput {
  name: string
  email: string
  message: string
}

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>()
  
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data)
    // ここにメール送信のロジックを追加
  }

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-2xl">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          お問い合わせ
        </motion.h2>
        
        <motion.form 
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div>
            <label htmlFor="name" className="block text-white mb-2">お名前</label>
            <input
              {...register('name', { required: '名前は必須です' })}
              type="text"
              className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.name && (
              <span className="text-red-500 text-sm">{errors.name.message}</span>
            )}
          </div>
          
          <div>
            <label htmlFor="email" className="block text-white mb-2">メールアドレス</label>
            <input
              {...register('email', { 
                required: 'メールアドレスは必須です',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: '有効なメールアドレスを入力してください'
                }
              })}
              type="email"
              className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && (
              <span className="text-red-500 text-sm">{errors.email.message}</span>
            )}
          </div>
          
          <div>
            <label htmlFor="message" className="block text-white mb-2">メッセージ</label>
            <textarea
              {...register('message', { required: 'メッセージは必須です' })}
              rows={5}
              className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.message && (
              <span className="text-red-500 text-sm">{errors.message.message}</span>
            )}
          </div>
          
          <Button
            type="submit"
            variant="primary"
            className="w-full py-3"
          >
            送信する
          </Button>
        </motion.form>
      </div>
    </section>
  )
}

export default Contact