import type { Person } from '@/content/types';
import { StatusPill } from '@/components/ui';
import { Avatar } from '@/components/Avatar';

/**
 * Person card. Public office and partnership role render as separate,
 * labeled fields. Portraits render when sourced (approved, or sourced at the
 * owner's direction with permission pending); the image falls back to a
 * dignified initials placeholder if it ever fails to load.
 */
export function PersonCard({ person }: { person: Person }) {
  const showPortrait =
    Boolean(person.portrait) &&
    (person.portraitPermissionStatus === 'approved' ||
      person.portraitPermissionStatus === 'supplied-pending-permission');

  const permissionPending =
    person.portraitPermissionStatus === 'supplied-pending-permission';

  return (
    <article className="person-card">
      <div className="person-card-body">
        <div className="person-card-top">
          <Avatar
            src={showPortrait ? person.portrait : null}
            fullName={person.fullName}
          />
          <div>
            <h3>{person.fullName}</h3>
            {person.publicOffice && (
              <p className="person-role">{person.publicOffice}</p>
            )}
            {person.participationConfirmed && person.partnershipRole && (
              <p className="person-partnership-role">
                Initiative role: {person.partnershipRole}
              </p>
            )}
          </div>
        </div>

        {!showPortrait && (
          <div>
            <StatusPill tone="awaiting">Portrait pending approval</StatusPill>
          </div>
        )}

        {person.bio && <p className="bio">{person.bio}</p>}

        {person.publicNote && (
          <p className="bio" style={{ fontSize: '0.86rem', fontStyle: 'italic' }}>
            {person.publicNote}
          </p>
        )}

        <div className="person-meta">
          <span>
            Public office:{' '}
            {person.publicOfficeVerified && person.publicOffice
              ? 'verified from a public source'
              : 'awaiting confirmation'}
            {person.sourceUrl ? (
              <>
                {' · '}
                <a href={person.sourceUrl} rel="noopener noreferrer">
                  View source
                </a>
              </>
            ) : null}
          </span>
          {showPortrait && person.portraitSourceUrl && (
            <span>
              Portrait: {permissionPending ? 'sourced, permission pending — ' : 'approved — '}
              <a href={person.portraitSourceUrl} rel="noopener noreferrer">
                view original
              </a>
            </span>
          )}
          {person.verifiedAt && (
            <span>Facts checked: {person.verifiedAt}</span>
          )}
          {!person.participationConfirmed && (
            <span>
              No confirmed role in the proposed partnership has been supplied
              for this person.
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
