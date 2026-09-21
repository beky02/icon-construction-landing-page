import { useRef, useState } from 'react';
import type { KeyboardEvent } from 'react';
import { Corners } from '../components/Corners';
import { Figure } from '../components/Figure';
import { Kicker } from '../components/Kicker';
import { projects } from '../data/site';

/** Mirrors the `featuredLayout` prop the design exposes to its editor. */
export type FeaturedLayout = 'side-by-side' | 'stacked';

interface ProjectsProps {
  layout?: FeaturedLayout;
}

export function Projects({ layout = 'side-by-side' }: ProjectsProps) {
  const [activeId, setActiveId] = useState(projects[0].id);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const foundIndex = projects.findIndex((project) => project.id === activeId);
  const activeIndex = foundIndex === -1 ? 0 : foundIndex;
  const active = projects[activeIndex];

  // A tablist is expected to move selection with the arrow keys; Tab moves
  // out of the list to the panel rather than between the tabs.
  function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    const step = event.key === 'ArrowRight' ? 1 : event.key === 'ArrowLeft' ? -1 : 0;
    if (step === 0) return;

    event.preventDefault();
    const next = (activeIndex + step + projects.length) % projects.length;
    setActiveId(projects[next].id);
    tabRefs.current[next]?.focus();
  }

  return (
    <section id="projects" className="section section--forest">
      <div className="shell">
        <Kicker onDark>03 · Featured projects</Kicker>
        <h2 className="sectionTitle projects__title">Delivered in Ethiopia</h2>

        <div className="projects__tabs" role="tablist" aria-label="Featured projects">
          {projects.map((project, index) => {
            const selected = project.id === activeId;
            return (
              <button
                key={project.id}
                ref={(node) => {
                  tabRefs.current[index] = node;
                }}
                type="button"
                role="tab"
                id={`project-tab-${project.id}`}
                aria-selected={selected}
                aria-controls={`project-panel-${project.id}`}
                tabIndex={selected ? 0 : -1}
                className="projects__tab"
                onClick={() => setActiveId(project.id)}
                onKeyDown={handleKeyDown}
              >
                {project.name}
              </button>
            );
          })}
        </div>

        <div
          role="tabpanel"
          id={`project-panel-${active.id}`}
          aria-labelledby={`project-tab-${active.id}`}
          tabIndex={0}
          className={
            layout === 'stacked'
              ? 'projects__featured projects__featured--stacked'
              : 'projects__featured'
          }
        >
          <Figure className="projects__figure" caption={active.photo}>
            <div className="figure__layer projects__slope" />
            <div className="figure__layer projects__centreline" />
            <div className="projects__sky" />
          </Figure>

          <div>
            <h3 className="projects__name">{active.name}</h3>
            <p className="projects__location">{active.location}</p>

            <div className="projects__meta">
              <div>
                <div className="microLabel projects__metaLabel">Project type</div>
                <div className="projects__metaValue">{active.type}</div>
              </div>
              <div>
                <div className="microLabel projects__metaLabel">Status</div>
                <div className="projects__metaValue projects__metaValue--status">
                  {active.status}
                </div>
              </div>
            </div>

            <p className="projects__body">{active.body}</p>

            <div className="projects__stats">
              {active.stats.map((stat) => (
                <div key={stat.label} className="blueprint projects__stat">
                  <div className="projects__statValue">{stat.value}</div>
                  <div className="microLabel projects__statLabel">{stat.label}</div>
                  <Corners />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
