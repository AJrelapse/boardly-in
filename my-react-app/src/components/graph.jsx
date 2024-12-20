import React from 'react';
import "../styles/graph.css";

function ProgressChart() {
  return (
    <div className="container">
      <div className="chart-container">
        <div className="chart-title">December</div>
        <div className="chart-bar">
          <div className="bar" style={{ height: '100%' }} />
          <div className="bar" style={{ height: '75%' }} />
          <div className="bar" style={{ height: '85%' }} />
          <div className="bar" style={{ height: '95%' }} />
          <div className="bar" style={{ height: '65%' }} />
          <div className="bar" style={{ height: '80%' }} />
          <div className="bar" style={{ height: '90%' }} />
          <div className="bar" style={{ height: '40%' }} />
          <div className="bar" style={{ height: '85%' }} />
        </div>
        <div className="bar-labels">
          <span>19</span>
          <span>18</span>
          <span>17</span>
          <span>16</span>
          <span>15</span>
          <span>14</span>
          <span>13</span>
          <span>12</span>
          <span>11</span>
        </div>
      </div>

      <div className="progress-container">
        <div className="progress-title">Progress</div>
        <div className="progress-circle-container">
          <div className="progress-circle">
            <div className="progress-value">8/10</div>
            <div className="progress-label">Physics</div>
          </div>
          <div className="progress-circle">
            <div className="progress-value">3/15</div>
            <div className="progress-label">Maths</div>
          </div>
          <div className="progress-circle">
            <div className="progress-value">6/10</div>
            <div className="progress-label">Chemistry</div>
          </div>
          <div className="progress-circle">
            <div className="progress-value">5/10</div>
            <div className="progress-label">Biology</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProgressChart;
