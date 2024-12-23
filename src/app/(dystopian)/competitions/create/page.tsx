/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client";

import React, { useEffect } from "react";
import { api } from "@/trpc/react"; // Import the api object
import {CompetitionType, MultiEntitySchemaType} from "../../../types"
import { competitionLevelSchema, useCurrentUser, problemStatementSchema,ruleSchema } from "@/lib/utils";
import CreateTeamDialog from "@/components/(dystopian)/create-team-dialog";
import { Button } from "@/components/ui/button"; // Import the Button component
import Links from "../../../../components/ui/Links";
import MultiEntity from "../../../../components/ui/MultiEntity";




const Page = () => {


  const createCompetition = api.competition.createCompetition.useMutation();

  const handleChange=(key:string, value:string|Date|number)=>
  {
    setForm((initState)=>({...initState,[key]:value}));
  }

  const saveCompetition = (form:  CompetitionType) => {
    try {
      createCompetition.mutate(
        {
          max_team_size: form.max_team_size,
          min_team_size: form.min_team_size,
          prizepool: form.prizepool,
          begin_time:form.begin_time,
          end_time:form.end_time,
          venue:form.venue,
          description:form.description,
          name:form.name,
        },
        {
          onSuccess: (e) => {
            //alert('Data Saved..')
            window.location.href="/competitions";

          },
        },
      );
    }   catch (e) {
      console.error(e);
      alert("Failed to accept the invitation. Please try again.");
    }
  };

 const [form,setForm]=React.useState<CompetitionType>({
   name: "",
  begin_time:new Date(),
  end_time:new Date(),
  description:"",
  max_team_size:0,
  min_team_size:0,
  prizepool:0,
  venue:""
 });

 const competitionLevelData=[
  {name:'Round-1',description:'Round-1 is very important', venue:'college room-1',timeline:'10/01/2025'},
  {name:'Round-2',description:'Round-2 is logical', venue:'college room-2',timeline:'10/02/2025'},
  {name:'Round-3',description:'Round-3 is final round', venue:'Other place',timeline:'10/03/2025'},
  {id:999999,name:'',description:'', venue:'',timeline:''}

 ]

 const problemStatementData=[
  {name:'problem-1',description:'problem-1 statement'},
  {name:'problem-2',description:'problem-2 statement'},
  {id:999999,name:'',description:''}
 ]

 const rulesData=[
  {name:'rule-1'},
  {name:'rule-2'},
  {id:999999,name:''}
 ]



 const [selectedTab, setSelectedTab]=React.useState(1);
 
  return (
    <>
    <Links links={[{id:1,text:'Details'},{id:2,text:'Levels'},{id:3,text:'Problem Statement'},{id:4,text:'Rules'}]} setTab={(id:number)=>setSelectedTab(id)} ></Links>
     
     {selectedTab==2 && <div style={{padding:'1rem'}}>
      <MultiEntity entityData={competitionLevelData} schema={competitionLevelSchema}></MultiEntity> 
      </div>}

      {selectedTab==3 && <div style={{padding:'1rem'}}>
      <MultiEntity entityData={problemStatementData} schema={problemStatementSchema}></MultiEntity> 
      </div>}

      {selectedTab==4 && <div style={{padding:'1rem'}}>
      <MultiEntity entityData={rulesData} schema={ruleSchema}></MultiEntity> 
      </div>}

     {selectedTab==1 && <div className="flex flex-col" style={{padding:'1rem'}}>
      <div className="flex flex-row" >
        <div className="left-col">
          <label className="font-semibold">
            Name
          </label>
          </div>
          <div >
          <input
            type="text"
            className="field-text"
            placeholder="Name" 
            onChange={(e)=>handleChange('name',e.target.value)}
          />
        </div>
        </div>
         <div className="flex flex-row">    
        <div className="left-col">
          <label className="font-semibold left">
            Description
          </label>
          </div>
          <div>
          <textarea
            rows={3}
            className="field-text"
            placeholder="Description"
            onChange={(e)=>handleChange('description',e.target.value)}
          />
        </div>
        </div>
        <div className="flex flex-row">
        <div className="left-col">
          <label className="font-semibold">
            Venue
          </label>
          </div>
          <div >
          <input
            type="text"
            onChange={(e)=>handleChange('venue',e.target.value)}
            className="field-text"
            placeholder="Venue"
          />
        </div>
        </div> 
        <div className="flex flex-row">
        <div className="left-col">
          <label className="font-semibold">
            Begin Date
          </label>
          </div>
          <div >
          <input
            type="date"
            onChange={(e)=>handleChange('begin_time',new Date(e.target.value))}
            className="field"
            
          />
        </div>
        </div>
        <div className="flex flex-row">
        <div className="left-col">
          <label className="font-semibold">
            End Date
          </label>
          </div>
          <div >
          <input
            type="date"
            onChange={(e)=>handleChange('end_time',new Date(e.target.value))}
            className="field"
            
          />
        </div>
        </div>
        <div className="flex flex-row">
        <div className="left-col">
          <label className="font-semibold">
            Min Team Size
          </label>
          </div>
          <div >
          <input
            type="text"
            id="minTeamSize"
            onChange={(e)=>handleChange('min_team_size',Number(e.target.value))}
            className="field"
            placeholder="minimum"
          />
        </div>
        </div>  
        <div className="flex flex-row">
        <div className="left-col">
          <label  className="font-semibold">
            Max Team Size
          </label>
          </div>
          <div >
          <input type="text"
            onChange={(e)=>handleChange('max_team_size',Number(e.target.value))}
            className="field"
            placeholder="maximum"
          />
        </div>
        </div>
        <div className="flex flex-row">
        <div className="left-col">
          <label className="font-semibold left">
            Prizepool
          </label>
          </div>
          <div >
          <input
            onChange={(e)=>handleChange('prizepool',Number(e.target.value))}
            type="text"
            id="prizePool"
            className="field"
            placeholder="Prizepool"
          />
        </div>
        </div>
       
        <div className="flex flex-row">
        <button className="btn" onClick={() =>
                  saveCompetition(form)
                } style={{marginLeft:"10.5rem",marginTop:"1rem"}}>Create</button>
        <button className="btn" style={{marginLeft:"1rem",marginTop:"1rem"}} onClick={()=>{window.location.href="/competitions"}}>Cancel</button>
        </div>
      </div>}
    </>
  );
};
export default Page;
