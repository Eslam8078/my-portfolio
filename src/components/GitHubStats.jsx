import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaCodeBranch,
  FaUsers,
  FaBook,
  FaStar,
} from "react-icons/fa";

// 1. Config
const USERNAME = "Eslam8078";

// 2. Reusable Stat Card
function StatCard({ icon: Icon, title, value, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      viewport={{ once: true }}
      className="
        rounded-3xl p-8 text-center
        bg-white dark:bg-slate-900
        border border-slate-200 dark:border-slate-800
        hover:border-teal-500 dark:hover:border-teal-400
        hover:-translate-y-1
        transition-all duration-300
      "
    >
      <div className="flex justify-center text-5xl text-teal-500 dark:text-teal-400 mb-5">
        <Icon />
      </div>

      <h3 className="text-4xl font-bold text-slate-900 dark:text-white">
        {value ?? 0}
      </h3>

      <p className="mt-3 text-slate-600 dark:text-slate-400">
        {title}
      </p>
    </motion.div>
  );
}

// 3. Main Component
export default function GitHubStats() {
  const [data, setData] = useState({
    repos: 0,
    followers: 0,
    following: 0,
    stars: 0,
  });

  const [loading, setLoading] = useState(true);

  // 4. Separated fetch logic (cleaner)
  async function fetchGitHubData() {
    try {
      const userRes = await fetch(
        `https://api.github.com/users/${USERNAME}`
      );

      if (!userRes.ok) throw new Error("Failed to fetch user");

      const user = await userRes.json();

      const repoRes = await fetch(user.repos_url);
      const repos = await repoRes.json();

      const stars = repos.reduce(
        (acc, repo) => acc + (repo.stargazers_count || 0),
        0
      );

      setData({
        repos: user.public_repos || 0,
        followers: user.followers || 0,
        following: user.following || 0,
        stars,
      });
    } catch (error) {
      console.error("GitHub API error:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchGitHubData();
  }, []);

  // 5. Loading UI
  if (loading) {
    return (
      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="text-center text-slate-600 dark:text-slate-400">
          Loading GitHub Stats...
        </div>
      </section>
    );
  }

  // 6. Data config (clean mapping)
  const stats = [
    { title: "Repositories", value: data.repos, icon: FaBook },
    { title: "Followers", value: data.followers, icon: FaUsers },
    { title: "Following", value: data.following, icon: FaCodeBranch },
    { title: "Stars", value: data.stars, icon: FaStar },
  ];

  return (
    <section
      id="github"
      className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <FaGithub
            size={60}
            className="mx-auto text-teal-500 dark:text-teal-400 mb-5"
          />

          <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
            GitHub Statistics
          </h2>

          <p className="mt-5 text-slate-600 dark:text-slate-400">
            Live data fetched directly from GitHub API
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((item, index) => (
            <StatCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              value={item.value}
              index={index}
            />
          ))}
        </div>

      </div>
    </section>
  );
}