import { FiAlertTriangle, FiInstagram, FiLinkedin, FiTwitter } from 'react-icons/fi'


const Footer = () => {
    return (


<footer className="border-t border-(--border-light) px-6 py-5 flex justify-between items-center flex-wrap gap-3">

  <p className="text-xs text-(--muted-foreground)">
    © 2026 UniStack. All rights reserved.
  </p>

  <div className="flex items-center gap-4 flex-wrap">
    <a href="/terms" className="text-xs text-(--muted-foreground) hover:text-white transition-colors">
      Terms of service
    </a>
    <span className="w-px h-3 bg-(--border-light)" />
    <a href="/privacy" className="text-xs text-(--muted-foreground) hover:text-white transition-colors">
      Privacy policy
    </a>
    <span className="w-px h-3 bg-(--border-light)" />
    <div className="flex items-center gap-3">
      <FiLinkedin className="text-(--muted-foreground) hover:text-white transition-colors cursor-pointer" size={16} />
      <FiTwitter className="text-(--muted-foreground) hover:text-white transition-colors cursor-pointer" size={16} />
      <FiInstagram className="text-(--muted-foreground) hover:text-white transition-colors cursor-pointer" size={16} />
    </div>
  </div>

  <div className="flex items-center gap-1.5 bg-amber-950/40 text-amber-400 border border-amber-800/50 text-xs font-medium px-3 py-1 rounded-md">
    <FiAlertTriangle size={12} />
    Dev mode — project only
  </div>

</footer>
    )
}

export default Footer