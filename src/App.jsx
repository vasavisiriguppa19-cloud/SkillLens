import { useState } from 'react';

import Navbar from './components/Navbar';
import Topbar from './components/Topbar';

import LandingPage from './pages/LandingPage';
import StudentProfile from './pages/StudentProfile';
import SkillsPage from './pages/SkillsPage';
import Dashboard from './pages/Dashboard';
import SkillGap from './pages/SkillGap';
import Roadmap from './pages/Roadmap';
import Resources from './pages/Resources';
import Progress from './pages/Progress';
import JobReadiness from './pages/JobReadiness';
import Profile from './pages/Profile';
import CareerIntelligence from './pages/CareerIntelligence';
import SkillAssessment from './pages/SkillAssessment';

import './App.css';

function App() {
  const [page, setPage] = useState('landing');

  const [student, setStudent] = useState({
    name: '',
    targetRole: '',
  });

  const [selectedSkills, setSelectedSkills] =
    useState([]);

  const [theme, setTheme] = useState('light');

  const showAppNavigation =
    page !== 'landing';

  return (
    <div
      className={`app-shell ${
        theme === 'dark'
          ? 'dark-theme'
          : ''
      }`}
    >
      {showAppNavigation && (
        <Navbar
          theme={theme}
          setTheme={setTheme}
          page={page}
          setPage={setPage}
        />
      )}

      <div
        className={
          showAppNavigation
            ? 'app-main-with-sidebar'
            : 'page-container'
        }
      >
        {showAppNavigation && (
          <Topbar
            page={page}
            student={student}
            setPage={setPage}
          />
        )}

        <main className="page-content">

          {page === 'landing' && (
            <LandingPage
              onGetStarted={() =>
                setPage('setup')
              }
            />
          )}

          {page === 'setup' && (
            <StudentProfile
              student={student}
              setStudent={setStudent}
              onContinue={() =>
                setPage('skills')
              }
            />
          )}

          {page === 'skills' && (
            <SkillsPage
              selectedSkills={selectedSkills}
              setSelectedSkills={
                setSelectedSkills
              }
              onAnalyze={() =>
                setPage('dashboard')
              }
            />
          )}

          {page === 'dashboard' && (
            <Dashboard
              student={student}
              selectedSkills={
                selectedSkills
              }
            />
          )}

          {page === 'gap' && (
            <SkillGap
              selectedSkills={
                selectedSkills
              }
              student={student}
            />
          )}

          {page === 'roadmap' && (
            <Roadmap
              student={student}
              selectedSkills={
                selectedSkills
              }
            />
          )}

          {page === 'resources' && (
            <Resources
              selectedSkills={
                selectedSkills
              }
            />
          )}

          {page === 'progress' && (
            <Progress
              selectedSkills={
                selectedSkills
              }
            />
          )}

          {page === 'jobs' && (
            <JobReadiness
              student={student}
              selectedSkills={
                selectedSkills
              }
            />
          )}

          {page === 'profile' && (
            <Profile
              student={student}
              setStudent={setStudent}
            />
          )}

          {page === 'career' && (
            <CareerIntelligence
              selectedSkills={
                selectedSkills
              }
              setSelectedSkills={
                setSelectedSkills
              }
            />
          )}

          {page === 'assessment' && (
            <SkillAssessment />
          )}

        </main>
      </div>
    </div>
  );
}

export default App;