import type { Person } from '@/content/types';
import Link from 'next/link';
import { Avatar } from '@/components/Avatar';
import { StatusPill } from '@/components/ui';

interface CompactLeaderCardProps {
  person: Person;
  showVisionModal: (person: Person) => void;
  visionOpen: boolean;
  visionPerson: Person | null;
}

export function CompactLeaderCard({
  person,
  showVisionModal,
  visionOpen,
  visionPerson,
}: CompactLeaderCardProps) {
  const showPortrait =
    Boolean(person.portrait) &&
    (person.portraitPermissionStatus === 'approved' ||
      person.portraitPermissionStatus === 'supplied-pending-permission');

  return (
    <article
      className="compact-leader-card"
      aria-labelledby={`card-name-${person.id}`}
    >
      <div className="compact-card-top">
        <Avatar src={showPortrait ? person.portrait : null} fullName={person.fullName} size={56} />
        <div className="compact-card-text">
          <h3 id={`card-name-${person.id}`} className="compact-name">
            {person.fullName}
          </h3>
          {person.publicOffice && (
            <p className="compact-role">{person.publicOffice}</p>
          )}
          {person.bio && (
            <p className="compact-bio">{person.bio}</p>
          )}
        </div>
      </div>

      <div className="compact-card-actions">
        <button
          type="button"
          className="compact-vision-btn"
          onClick={() => showVisionModal(person)}
          aria-label={`My Vision — ${person.fullName}`}
        >
          My Vision
        </button>
        <Link href={`/leaders/${person.id}`} className="compact-read-more">
          Read More
        </Link>
      </div>
    </article>
  );
}