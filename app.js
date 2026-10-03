
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

const sb=createClient('https://blfgwysgekfqhcafofhe.supabase.co','sb_publishable_ThLetpd4hj49fjce-kXoFA_v4ghwIqV');
const COURSE={"course_code": "TIB-PM-GRC-SECURITY-LEAD", "app_course_id": "pm_to_grc_security_lead", "display_name": "From SAP Project Manager to GRC & Security Lead", "short_name": "GRC & Security Lead Academy", "brand_subtitle": "SECURITY LEADERSHIP BRIDGE PROGRAMME", "subtitle": "Ten-week bridge programme for directing SAP security, GRC and identity workstreams.", "duration": "10 weeks", "study_load": "About 110 hours • roughly 11 hours/week", "unit_label_plural": "Modules", "learning_principle_title": "Direct and challenge specialists", "learning_principle": "The course develops enough security and GRC depth to direct specialists, challenge evidence, govern risk decisions and lead incidents—without requiring live SAP, GRC or cloud-system access.", "groups": [{"id": "week1", "label": "Week 1", "summary": "Self-assessment; Module 1 quiz", "items": [{"id": "M0", "code": "Module 0 —", "title": "Orientation and self-assessment", "meta": "2 hours • This guide; self-assessment", "description": "Security-lead flow: understand the artifact, diagnose the issue, make the lead decision, and define the response."}, {"id": "M1", "code": "Module 1 —", "title": "Controls and audit for the SAP project manager", "meta": "7 hours • Bridge Manual A; C-ITGC-AC controls", "description": "Security-lead flow: understand the artifact, diagnose the issue, make the lead decision, and define the response."}]}, {"id": "week2", "label": "Week 2", "summary": "Module 2 quiz; start Module 3", "items": [{"id": "M2", "code": "Module 2 —", "title": "SAP authorisation foundations and troubleshooting", "meta": "8 hours • Security Manual Part 1; S05 incidents", "description": "Security-lead flow: understand the artifact, diagnose the issue, make the lead decision, and define the response."}]}, {"id": "week3", "label": "Week 3", "summary": "Module 3 and 4 quizzes; CR-S3 submitted", "items": [{"id": "M3", "code": "Module 3 —", "title": "Role design, lifecycle and least privilege", "meta": "10 hours • Security Manual Part 1; S01", "description": "Security-lead flow: understand the artifact, diagnose the issue, make the lead decision, and define the response.", "submission_expected": true}, {"id": "M4", "code": "Module 4 —", "title": "Fiori and S/4HANA security, including migration residue", "meta": "8 hours • Security Manual Part 2; S01/FEP", "description": "Security-lead flow: understand the artifact, diagnose the issue, make the lead decision, and define the response."}]}, {"id": "week4", "label": "Week 4", "summary": "Module 5 quiz; CR-S5 practice", "items": [{"id": "M5", "code": "Module 5 —", "title": "GRC Access Control: ARA, ARM, EAM and connectors", "meta": "10 hours • Security Manual Part 2; S02", "description": "Security-lead flow: understand the artifact, diagnose the issue, make the lead decision, and define the response.", "submission_expected": true}]}, {"id": "week5", "label": "Week 5", "summary": "Module 6 quiz; CR-S6 submitted", "items": [{"id": "M6", "code": "Module 6 —", "title": "SoD, critical access, mitigations and access reviews", "meta": "9 hours • Security Manual Part 3; W06/S02/S04", "description": "Security-lead flow: understand the artifact, diagnose the issue, make the lead decision, and define the response.", "submission_expected": true}]}, {"id": "week6", "label": "Week 6", "summary": "Module 7 quiz; trace exercise submitted", "items": [{"id": "M7", "code": "Module 7 —", "title": "Identity and cloud: IAS, IPS, IAG, SailPoint, SuccessFactors, Ariba, BTP", "meta": "9 hours • Security Manual Part 3; S03", "description": "Security-lead flow: understand the artifact, diagnose the issue, make the lead decision, and define the response.", "submission_expected": true}, {"id": "M8", "code": "Module 8 —", "title": "Oil and gas access risks and the workbook toolkit", "meta": "6 hours • Security Manual Part 3; W06/W07/W11/W13", "description": "Security-lead flow: understand the artifact, diagnose the issue, make the lead decision, and define the response."}]}, {"id": "week7", "label": "Week 7", "summary": "CR-S9 practice", "items": [{"id": "M9", "code": "Module 9 —", "title": "Directing access testing and facing the auditor", "meta": "9 hours • Security Manual Part 4; W10–W13", "description": "Security-lead flow: understand the artifact, diagnose the issue, make the lead decision, and define the response.", "submission_expected": true}]}, {"id": "week8", "label": "Week 8", "summary": "Incident diagnosis submitted", "items": [{"id": "M10", "code": "Module 10 —", "title": "Incidents and the production war room", "meta": "8 hours • Security Manual Part 4; S05", "description": "Security-lead flow: understand the artifact, diagnose the issue, make the lead decision, and define the response.", "submission_expected": true}]}, {"id": "week9", "label": "Week 9", "summary": "Planning pack submitted", "items": [{"id": "M11", "code": "Module 11 —", "title": "Leading the workstream: governance, metrics, decisions", "meta": "8 hours • Security Lead Playbook; S06", "description": "Security-lead flow: understand the artifact, diagnose the issue, make the lead decision, and define the response."}, {"id": "M12", "code": "Module 12 —", "title": "Planning and estimating a security and GRC workstream", "meta": "7 hours • Module 12 manual; estimating model", "description": "Security-lead flow: understand the artifact, diagnose the issue, make the lead decision, and define the response.", "submission_expected": true}]}, {"id": "week10", "label": "Week 10", "summary": "Capstone pack and steering presentation", "items": [{"id": "M13", "code": "Module 13 —", "title": "Capstone: Verrin Energy Partners", "meta": "9 hours • Capstone brief; new case", "description": "Security-lead flow: understand the artifact, diagnose the issue, make the lead decision, and define the response.", "submission_expected": true}]}], "materials": [{"category": "Start Here", "files": ["README_PM_to_GRC_Security_Lead_Course.docx", "TIB_PM_to_GRC_Security_Lead_Course_Guide.docx", "Scope and Extension Design"]}, {"category": "Security Manuals", "files": ["Security Manual Part 1 Modules 0/2/3", "Part 2 Modules 4/5", "Part 3 Modules 6/7/8", "Part 4 Modules 9/10"]}, {"category": "Leading & Planning", "files": ["Corvane Security Lead Story Companion", "Security Lead Playbook", "Module 12 Planning & Estimating", "Security Workstream Estimating Model.xlsx"]}, {"category": "Capstone / Participant", "files": ["TIB_Module_13_Security_Capstone_Participant_Brief.docx"]}, {"category": "Assessment / Participant", "files": ["TIB_Security_Assessment_Pack_Participant.docx"]}, {"category": "Case Data", "files": ["Corvane Energy SAP Controls Project", "Corvane Security Extension S01–S06"]}, {"category": "Instructor Only — protected", "files": ["Security Capstone Assessor Guide", "Security Capstone Scoring Sheet", "Security Instructor Guide and Answer Key"]}], "assessment": "Certification: Module quizzes 15%, Practical 15%, Case reviews 20%, Planning pack 20%, Capstone 30%. Requires 75% overall, at least 70% on every element, capstone ≥70/100, and presentation ≥21/30."};
const $=id=>document.getElementById(id);
let session=null, progressRows=[], submissionRows=[], materialRows=[], scoreRows=[], assessmentComponents=[], itemRows=[], itemScoreRows=[], currentView='overview';

function esc(s){return String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function msg(text,kind=''){ $('msg').innerHTML=text?`<div class="msg ${kind}">${esc(text)}</div>`:'' }
function safeName(s){return String(s||'file').replace(/[^A-Za-z0-9._-]+/g,'_')}

async function signIn(){
  msg('');
  const {data,error}=await sb.auth.signInWithPassword({email:$('email').value.trim(),password:$('password').value});
  if(error){msg(error.message,'error');return}
  session=data.session; await enterApp();
}
async function signOut(){await sb.auth.signOut();location.reload()}

async function enterApp(){
  const {data:{session:s}}=await sb.auth.getSession();
  if(!s)return;
  session=s;
  const {data:ents,error}=await sb.rpc('get_my_tib_academy_courses');
  if(error){msg(error.message,'error');return}
  if(!(ents||[]).some(x=>x.app_course_id===COURSE.app_course_id)){
    msg('Your account is valid, but you are not actively enrolled in this TIB Academy course.','error');
    return;
  }
  $('login').classList.add('hidden');$('app').classList.remove('hidden');
  $('userEmail').textContent=session.user.email||'';
  await Promise.all([loadProgress(),loadMaterials(),loadSubmissions(),loadAssessment(),loadAssessmentItems()]);
  render();
}
async function loadProgress(){
  const {data,error}=await sb.from('academy_progress').select('*').eq('app_course_id',COURSE.app_course_id);
  if(!error)progressRows=data||[];
}
async function loadMaterials(){
  const {data,error}=await sb.from('academy_materials').select('*').eq('app_course_id',COURSE.app_course_id).eq('is_active',true).order('category').order('sort_order');
  if(!error)materialRows=data||[];
}
async function loadSubmissions(){
  const {data,error}=await sb.from('academy_submissions').select('*').eq('app_course_id',COURSE.app_course_id).order('submitted_at',{ascending:false});
  if(!error)submissionRows=data||[];
}
async function loadAssessment(){
  const [{data:components},{data:scores}]=await Promise.all([
    sb.from('academy_assessment_components').select('*').eq('app_course_id',COURSE.app_course_id).order('sort_order'),
    sb.from('academy_scores').select('*').eq('app_course_id',COURSE.app_course_id)
  ]);
  assessmentComponents=components||[];scoreRows=scores||[];
}
async function loadAssessmentItems(){
  const [{data:items},{data:scores}]=await Promise.all([
    sb.from('academy_assessment_items').select('*').eq('app_course_id',COURSE.app_course_id).order('sort_order'),
    sb.from('academy_item_scores').select('*').eq('app_course_id',COURSE.app_course_id)
  ]);
  itemRows=items||[];itemScoreRows=scores||[];
}
function statusFor(id){return progressRows.find(r=>r.item_id===id)?.status||'not_started'}
function submissionFor(id){return submissionRows.find(r=>r.item_id===id)}
async function mark(id,status){
  const pct=status==='completed'?100:(status==='submitted'?90:(status==='in_progress'?50:0));
  const payload={user_id:session.user.id,app_course_id:COURSE.app_course_id,item_id:id,status,progress_percent:pct,updated_at:new Date().toISOString()};
  const {error}=await sb.from('academy_progress').upsert(payload,{onConflict:'user_id,app_course_id,item_id'});
  if(error){alert(error.message);return}
  await loadProgress();renderCurrent();
}
function allItems(){return COURSE.groups.flatMap(g=>g.items)}
function completion(){
  const items=allItems(); if(!items.length)return 0;
  return Math.round(items.filter(i=>['completed','submitted','passed'].includes(statusFor(i.id))).length/items.length*100)
}
function setActive(view){
  currentView=view;
  document.querySelectorAll('.navbtn').forEach(b=>b.classList.toggle('active',b.dataset.view===view));
}
function render(){
  $('brandTitle').textContent=COURSE.short_name;
  $('brandSubtitle').textContent=COURSE.brand_subtitle;
  $('pageTitle').textContent=COURSE.display_name;
  $('pageSubtitle').textContent=COURSE.subtitle;
  renderSidebar(); renderCurrent();
}
function renderSidebar(){
  $('navGroups').innerHTML=COURSE.groups.map(g=>`<button class="navbtn" data-view="group:${esc(g.id)}">${esc(g.label)}</button>`).join('');
  document.querySelectorAll('.navbtn').forEach(b=>b.onclick=()=>{
    document.querySelectorAll('.navbtn').forEach(x=>x.classList.remove('active'));b.classList.add('active');
    const v=b.dataset.view;
    if(v.startsWith('group:')){currentView=v;renderGroup(v.slice(6))}
    else {currentView=v;renderCurrent()}
  });
}
function renderCurrent(){
  if(currentView==='overview')renderOverview();
  else if(currentView==='path')renderPath();
  else if(currentView==='materials')renderMaterials();
  else if(currentView==='submissions')renderSubmissions();
  else if(currentView==='assessment')renderAssessment();
  else if(currentView.startsWith('group:'))renderGroup(currentView.slice(6));
}
function renderOverview(){
  setActive('overview');
  $('pageTitle').textContent=COURSE.display_name;$('pageSubtitle').textContent=COURSE.subtitle;
  const pct=completion(), items=allItems(), done=items.filter(i=>['completed','submitted','passed'].includes(statusFor(i.id))).length;
  $('content').innerHTML=`
    <div class="grid">
      <div class="card"><div class="muted">Overall progress</div><div class="kpi">${pct}%</div><div class="progress"><span style="width:${pct}%"></span></div></div>
      <div class="card"><div class="muted">${esc(COURSE.unit_label_plural)}</div><div class="kpi">${items.length}</div><div>${done} completed/submitted</div></div>
      <div class="card"><div class="muted">Protected materials</div><div class="kpi">${materialRows.length}</div><div>${submissionRows.length} submission(s)</div></div>
    </div>
    <div class="callout"><b>${esc(COURSE.learning_principle_title)}</b><br>${esc(COURSE.learning_principle)}</div>
    <div class="section-title"><h3>Course path</h3></div>
    <div class="list">${COURSE.groups.map(g=>{
      const complete=g.items.filter(i=>['completed','submitted','passed'].includes(statusFor(i.id))).length;
      return `<div class="item"><h4>${esc(g.label)}</h4><div class="meta">${esc(g.summary||'')}</div>
      <span class="badge gold">${complete}/${g.items.length} complete</span>
      <div class="actions"><button class="btn primary" data-open="${esc(g.id)}">Open</button></div></div>`
    }).join('')}</div>`;
  document.querySelectorAll('[data-open]').forEach(b=>b.onclick=()=>{currentView='group:'+b.dataset.open;renderGroup(b.dataset.open)});
}
function renderPath(){
  setActive('path');$('pageTitle').textContent='Full Learning Path';$('pageSubtitle').textContent=COURSE.subtitle;
  $('content').innerHTML=COURSE.groups.map(g=>`<div class="card" style="margin-bottom:14px"><h3>${esc(g.label)}</h3><p>${esc(g.summary||'')}</p>`+
    g.items.map(i=>`<div class="item ${['completed','submitted','passed'].includes(statusFor(i.id))?'completed':''}"><b>${esc(i.code||'')}</b> ${esc(i.title)}</div>`).join('')+`</div>`).join('');
}
function renderGroup(id){
  const g=COURSE.groups.find(x=>x.id===id);if(!g)return;
  $('pageTitle').textContent=g.label;$('pageSubtitle').textContent=g.summary||COURSE.subtitle;
  $('content').innerHTML=`<div class="list">${g.items.map(i=>itemCard(i)).join('')}</div>`;
  bindItemActions();
}
function itemCard(i){
  const st=statusFor(i.id), sub=submissionFor(i.id);
  const badge=st==='completed'?'<span class="badge green">Completed</span>':
    st==='submitted'?'<span class="badge maroon">Submitted</span>':
    st==='in_progress'?'<span class="badge gold">In progress</span>':'<span class="badge">Not started</span>';
  return `<div class="item ${['completed','submitted','passed'].includes(st)?'completed':''}">
    <h4>${esc(i.code||'')} ${esc(i.title)}</h4>
    <div class="meta">${esc(i.meta||'')}</div>${badge}
    ${i.description?`<p class="detail">${esc(i.description)}</p>`:''}
    ${i.dependencies?`<div class="muted"><b>Dependencies:</b> ${esc(i.dependencies)}</div>`:''}
    ${i.gate?`<div class="callout"><b>${esc(i.gate)}</b><br>${esc(i.gate_requirement||'')}</div>`:''}
    ${sub?`<div class="msg good"><b>Latest submission:</b> ${esc(sub.original_filename)} · ${esc(sub.status)}</div>`:''}
    <div class="actions">
      ${st!=='completed'?`<button class="btn secondary" data-progress="${esc(i.id)}">Start / Continue</button>
      <button class="btn primary" data-complete="${esc(i.id)}">Mark Complete</button>`:`<button class="btn" data-reopen="${esc(i.id)}">Reopen</button>`}
      ${i.submission_expected?`<label class="btn gold">Choose File<input type="file" class="hidden-file" data-file="${esc(i.id)}" hidden></label>
      <button class="btn primary" data-submit="${esc(i.id)}">Submit Work</button>`:''}
    </div>
    ${i.submission_expected?`<div class="muted" id="filelabel-${esc(i.id)}">No file selected.</div>`:''}
  </div>`;
}
function bindItemActions(){
  document.querySelectorAll('[data-progress]').forEach(b=>b.onclick=()=>mark(b.dataset.progress,'in_progress'));
  document.querySelectorAll('[data-complete]').forEach(b=>b.onclick=()=>mark(b.dataset.complete,'completed'));
  document.querySelectorAll('[data-reopen]').forEach(b=>b.onclick=()=>mark(b.dataset.reopen,'in_progress'));
  document.querySelectorAll('[data-file]').forEach(inp=>inp.onchange=()=>{const f=inp.files?.[0];const el=$('filelabel-'+inp.dataset.file);if(el)el.textContent=f?f.name:'No file selected.'});
  document.querySelectorAll('[data-submit]').forEach(b=>b.onclick=()=>submitWork(b.dataset.submit));
}
async function submitWork(itemId){
  const inp=document.querySelector(`[data-file="${CSS.escape(itemId)}"]`), file=inp?.files?.[0];
  if(!file){alert('Choose a file first.');return}
  const comments=prompt('Optional submission comments:','')||'';
  const path=`${COURSE.app_course_id}/${session.user.id}/${itemId}/${Date.now()}_${safeName(file.name)}`;
  const {error:upErr}=await sb.storage.from('academy-submissions').upload(path,file,{upsert:false});
  if(upErr){alert(upErr.message);return}
  const {error:dbErr}=await sb.from('academy_submissions').insert({
    user_id:session.user.id,app_course_id:COURSE.app_course_id,item_id:itemId,
    submission_type:'assignment',storage_path:path,original_filename:file.name,status:'submitted',comments
  });
  if(dbErr){alert(dbErr.message);return}
  await mark(itemId,'submitted');await loadSubmissions();renderCurrent();
}
async function downloadMaterial(id){
  const m=materialRows.find(x=>x.id===id);if(!m?.storage_path)return;
  const {data,error}=await sb.storage.from('academy-materials').download(m.storage_path);
  if(error){alert(error.message);return}
  const url=URL.createObjectURL(data),a=document.createElement('a');a.href=url;a.download=m.filename;a.click();
  setTimeout(()=>URL.revokeObjectURL(url),2000);
}
function renderMaterials(){
  setActive('materials');$('pageTitle').textContent='Protected Course Materials';$('pageSubtitle').textContent='Only materials authorized for your enrollment are returned.';
  if(!materialRows.length){
    $('content').innerHTML='<div class="callout"><b>No protected materials have been uploaded yet.</b><br>The administrator can ingest the approved course ZIP from the Academy Content Admin tool.</div>';return;
  }
  const cats=[...new Set(materialRows.map(x=>x.category))];
  $('content').innerHTML=cats.map(cat=>`<div class="card" style="margin-bottom:14px"><h3>${esc(cat)}</h3><div class="list">`+
    materialRows.filter(x=>x.category===cat).map(m=>`<div class="item"><h4>${esc(m.title)}</h4><div class="meta">${esc(m.filename)} · ${esc(m.material_type)}</div>
    ${m.storage_path?`<button class="btn primary" data-download="${esc(m.id)}">Download</button>`:'<span class="badge">Pending upload</span>'}</div>`).join('')+
    '</div></div>').join('');
  document.querySelectorAll('[data-download]').forEach(b=>b.onclick=()=>downloadMaterial(b.dataset.download));
}
function renderSubmissions(){
  setActive('submissions');$('pageTitle').textContent='My Submissions';$('pageSubtitle').textContent='Uploaded workbook, case, planning and capstone work.';
  if(!submissionRows.length){$('content').innerHTML='<div class="callout">No work has been submitted yet.</div>';return}
  $('content').innerHTML=`<table class="table"><thead><tr><th>Item</th><th>File</th><th>Status</th><th>Submitted</th><th>Reviewer</th></tr></thead><tbody>`+
    submissionRows.map(s=>`<tr><td>${esc(s.item_id)}</td><td>${esc(s.original_filename)}</td><td>${esc(s.status)}</td><td>${new Date(s.submitted_at).toLocaleString()}</td><td>${esc(s.reviewer_comments||'—')}</td></tr>`).join('')+
    `</tbody></table>`;
}
function renderAssessment(){
  setActive('assessment');$('pageTitle').textContent='Assessment & Certification';$('pageSubtitle').textContent='Your scored course components and certification status.';
  if(!assessmentComponents.length){$('content').innerHTML=`<div class="card"><h3>Gate-based completion</h3><div class="detail">${esc(COURSE.assessment||'')}</div></div>`;return}
  let weighted=0,complete=true;
  for(const c of assessmentComponents){const s=scoreRows.find(x=>x.component_code===c.component_code);if(s?.score_percent==null)complete=false;else weighted+=Number(s.score_percent)*Number(c.weight_percent)/100}
  const presentCode=COURSE.app_course_id==='pm_to_controls_lead'?'CAP_PRESENT':'SEC_CAP_PRESENT';
  const present=itemScoreRows.find(x=>x.item_code===presentCode)?.raw_marks;
  const cap=scoreRows.find(x=>x.component_code==='capstone')?.score_percent;
  const elementsPass=assessmentComponents.every(c=>{const s=scoreRows.find(x=>x.component_code===c.component_code);return s?.score_percent!=null&&Number(s.score_percent)>=70});
  const certified=complete&&weighted>=75&&elementsPass&&Number(cap)>=70&&Number(present)>=21;
  const itemTable=itemRows.length?`<div class="section-title"><h3>Scored items</h3></div><table class="table"><thead><tr><th>Item</th><th>Max</th><th>Your mark</th><th>Notes</th></tr></thead><tbody>${itemRows.map(i=>{const s=itemScoreRows.find(x=>x.item_code===i.item_code);return `<tr><td>${esc(i.display_name)}</td><td>${i.max_marks}</td><td>${s?.raw_marks==null?'Not scored':s.raw_marks}</td><td>${esc(i.notes||'')}</td></tr>`}).join('')}</tbody></table>`:'';
  $('content').innerHTML=`<div class="grid"><div class="card"><div class="muted">Current weighted score</div><div class="kpi">${complete?weighted.toFixed(1)+'%':'—'}</div></div><div class="card"><div class="muted">Certification status</div><div class="kpi" style="font-size:22px">${certified?'ELIGIBLE':complete?'NOT YET ELIGIBLE':'INCOMPLETE'}</div></div></div>
  <div class="section-title"><h3>Assessment components</h3></div><table class="table"><thead><tr><th>Component</th><th>Weight</th><th>Minimum</th><th>Your score</th></tr></thead><tbody>${assessmentComponents.map(c=>{const s=scoreRows.find(x=>x.component_code===c.component_code);return `<tr><td>${esc(c.display_name)}</td><td>${c.weight_percent}%</td><td>${c.minimum_percent??'—'}%</td><td>${s?.score_percent==null?'Not scored':Number(s.score_percent).toFixed(1)+'%'}</td></tr>`}).join('')}</tbody></table>${itemTable}<div class="callout">${esc(COURSE.assessment||'')}</div>`;
}

$('signIn').onclick=signIn;$('password').onkeydown=e=>{if(e.key==='Enter')signIn()};
$('logout').onclick=signOut;
document.querySelectorAll('.static-nav').forEach(b=>b.onclick=()=>{currentView=b.dataset.view;renderCurrent()});
enterApp();
