import { SiNextdotjs, SiReact, SiTailwindcss, SiTypescript, SiPrisma, SiOpenai } from 'react-icons/si';
import { FaDatabase, FaCloud, FaBrain } from 'react-icons/fa';

export const technologies = [
  {
    category: "フロントエンド",
    description: "最新のWeb技術で美しいUIを実現",
    techs: [
      {
        name: "Next.js",
        icon: SiNextdotjs,
        description: "高速な画面遷移とSEO対策"
      },
      {
        name: "React",
        icon: SiReact,
        description: "インタラクティブなUI構築"
      },
      {
        name: "TailwindCSS",
        icon: SiTailwindcss,
        description: "美しいデザインの実現"
      }
    ]
  },
  {
    category: "バックエンド",
    description: "安定性と拡張性を重視した構成",
    techs: [
      {
        name: "TypeScript",
        icon: SiTypescript,
        description: "型安全な開発環境"
      },
      {
        name: "Prisma",
        icon: SiPrisma,
        description: "効率的なDB操作"
      },
      {
        name: "Database",
        icon: FaDatabase,
        description: "データの永続化と管理"
      }
    ]
  },
  {
    category: "AI技術",
    description: "最新のAI技術を活用",
    techs: [
      {
        name: "OpenAI",
        icon: SiOpenai,
        description: "高度な自然言語処理"
      },
      {
        name: "Cloud AI",
        icon: FaCloud,
        description: "クラウドベースの推論"
      },
      {
        name: "Custom AI",
        icon: FaBrain,
        description: "独自のAIモデル開発"
      }
    ]
  }
]; 