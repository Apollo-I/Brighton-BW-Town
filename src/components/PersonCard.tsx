import type { Person } from '@/content/types';
import { StatusPill, initialsOf } from '@/components/ui';

/**
 * Person card. Public office and partnership role render as separate,
 * labeled fields. Portraits render only when supplied and approved;
 * otherwise a dignified initials placeholder is shown.
 */
export function PersonCard({ person }: { person: Person }) {
  const showPortrait = Boolean(person.portrait) && person.portraitPermissionStatus === 'approved';

  return (
    <article className="person-card">
      <div className="person-card-body">
        <div className="person-card-top">
          <span className="avatar" aria-hidden="true">
            {showPortrait && person.portrait ? (
              <img src={person.portrait} alt="" width={72} height={72} />
            ) : (
              initialsOf(person.fullName)
            )}
          </span>
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
