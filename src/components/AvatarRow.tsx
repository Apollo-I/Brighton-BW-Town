import Link from 'next/link';
import { Avatar } from '@/components/Avatar';
import type { Person } from '@/content/types';

interface AvatarRowProps {
  people: Person[];
  extra: number;
}

export function AvatarRow({ people, extra }: AvatarRowProps) {
  if (people.length === 0) {
    return (
      <div className="avatar-row-participants-empty">
        <span>Project participants to be confirmed.</span>
      </div>
    );
  }

  return (
    <div className="avatar-row-wrapper" aria-label="People involved">
      <span className="avatar-row-label">People involved</span>
      <div className="avatar-row">
        {people.map((person) => {
          const showPortrait =
            Boolean(person.portrait) &&
            (person.portraitPermissionStatus === 'approved' ||
              person.portraitPermissionStatus === 'supplied-pending-permission');
          return (
            <Link
              key={person.id}
              href={`/leaders/${person.id}`}
              className="avatar-row-person"
              aria-label={person.fullName}
            >
              <Avatar
                src={showPortrait ? person.portrait : null}
                fullName={person.fullName}
                size={32}
              />
            </Link>
          );
        })}
        {extra > 0 && (
          <span className="avatar-row-extra" aria-label={`+${extra} more`}>
            +{extra}
          </span>
        )}
      </div>
    </div>
  );
}