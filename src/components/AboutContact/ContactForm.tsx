import { motion } from 'framer-motion';
import { fadeInUp } from '@/constants/animations';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
// Supabaseのインポートを一時的にコメントアウト
// import { supabase } from '@/lib/supabase';
import ContactInfo from './ContactInfo';
import FormInput from './FormInput';
import Toast from '@/components/ui/Toast';

// EmailJSの設定
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '';
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '';
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '';

// 送信状態の型定義
type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

interface IFormInput {
  inquiryType: string;
  name: string;
  email: string;
  message: string;
}

const inquiryTypes = [
  { value: 'initial-consultation', label: 'Webサイト制作の相談からスタート' },
  { value: 'service-improvement', label: '既存サービスの改善・リニューアル' },
  { value: 'landing-page', label: 'ランディングページ制作' },
  { value: 'corporate', label: 'コーポレートサイト制作' },
];

// ローディングスピナーコンポーネント
const Spinner = () => (
  <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
  </svg>
);

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<IFormInput>();
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');
  const [toastVisible, setToastVisible] = useState(false);

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      setSubmitStatus('submitting');

      // お問い合わせ種類のラベルを取得
      const inquiryTypeLabel = inquiryTypes.find(type => type.value === data.inquiryType)?.label || data.inquiryType;

      // EmailJSのテンプレートパラメータ
      const templateParams = {
        inquiry_type: inquiryTypeLabel,
        from_name: data.name,
        from_email: data.email,
        message: data.message,
      };

      // メール送信のみ実行
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      /* Supabaseへのデータ保存は一時的にコメントアウト
      await supabase.from('inquiries').insert([
        {
          inquiry_type: data.inquiryType,
          inquiry_type_label: inquiryTypeLabel,
          name: data.name,
          email: data.email,
          message: data.message,
          status: 'new',
          created_at: new Date().toISOString(),
        }
      ]);
      */

      setSubmitStatus('success');
      setToastVisible(true);
      reset(); // フォームをリセット
    } catch (error) {
      console.error('送信エラー:', error);
      setSubmitStatus('error');
      setToastVisible(true);
    }
  };

  // 送信ボタンの状態に応じたコンテンツを返す
  const getSubmitButtonContent = () => {
    switch (submitStatus) {
      case 'submitting':
        return (
          <span className="flex items-center justify-center gap-2">
            <Spinner />
            <span>送信中...</span>
          </span>
        );
      case 'success':
        return '送信完了！';
      case 'error':
        return '再送信';
      default:
        return '送信する';
    }
  };

  // トースト通知のメッセージを取得
  const getToastMessage = () => {
    if (submitStatus === 'success') {
      return 'お問い合わせありがとうございます。自動返信メールをお送りしましたので、ご確認ください。内容を確認次第、改めてご連絡させていただきます。';
    }
    return '申し訳ありません。送信に失敗しました。時間をおいて再度お試しください。';
  };

  return (
    <motion.div
      {...fadeInUp}
      className="max-w-6xl mx-auto pb-12 md:pb-16 relative"
    >
      <div className="grid md:grid-cols-2 gap-12 md:gap-16">
        {/* お問い合わせフォーム */}
        <div>
          <div className="text-center md:text-left mb-12">
            <h3 className="text-2xl font-semibold text-white mb-4">お問い合わせ</h3>
            <p className="text-gray-300">
              お気軽にご相談ください。プロジェクトの規模や予算に関わらず、最適なソリューションをご提案いたします。
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <FormInput
              label="お問い合わせの種類"
              type="select"
              error={errors.inquiryType?.message}
              {...register('inquiryType', {
                required: 'お問い合わせの種類を選択してください'
              })}
              options={inquiryTypes}
            />

            <FormInput
              label="お名前"
              type="text"
              error={errors.name?.message}
              {...register('name', {
                required: 'お名前を入力してください',
                maxLength: {
                  value: 50,
                  message: 'お名前は50文字以内で入力してください'
                }
              })}
              placeholder="山田 太郎"
            />

            <FormInput
              label="メールアドレス"
              type="email"
              error={errors.email?.message}
              {...register('email', {
                required: 'メールアドレスを入力してください',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: '正しいメールアドレスを入力してください'
                }
              })}
              placeholder="your@email.com"
            />

            <FormInput
              label="お問い合わせ内容"
              type="textarea"
              error={errors.message?.message}
              {...register('message', {
                required: 'お問い合わせ内容を入力してください',
                maxLength: {
                  value: 1000,
                  message: 'お問い合わせ内容は1000文字以内で入力してください'
                }
              })}
              rows={6}
              placeholder="具体的なご要望やご質問をご記入ください"
            />

            <div>
              <button
                type="submit"
                disabled={submitStatus === 'submitting'}
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium 
                  shadow-lg shadow-blue-500/20
                  hover:shadow-xl hover:shadow-purple-500/30
                  hover:scale-[1.02]
                  active:scale-[0.98]
                  transition-all duration-200 
                  focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
                  relative overflow-hidden
                  before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent 
                  before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-1000
                  disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <span className="relative z-10">{getSubmitButtonContent()}</span>
              </button>
            </div>
          </form>
        </div>

        {/* 会社情報 */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-10">
          <ContactInfo />
        </div>
      </div>

      {/* トースト通知 */}
      <Toast
        type={submitStatus === 'success' ? 'success' : 'error'}
        message={getToastMessage()}
        isVisible={toastVisible}
        onClose={() => setToastVisible(false)}
      />
    </motion.div>
  );
};

export default ContactForm; 